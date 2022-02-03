import './App.css';
import React, { useState, useEffect } from 'react';
import { useInterval } from 'usehooks-ts'
import Footer from './components/Footer'
import EntranceManagement from './components/EntranceManagement'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto'
import cloneDeep from 'lodash/cloneDeep';


const App = () => {
  
  const [dataGraph, setDataGraph] = useState({
    labels: [
              '1','2','3','4','5','6','7','8','9','10',
              '11','12','13','14','15','16','17','18','19','20',
              '30','31','32','33','34','35','36','37','38','39','40',
              '40','41','42','43','44','45','46','47','48','49','50',
              '50','51','52','53','54','55','56','57','58','59','60'
            ],
    datasets: [
      {
        label: "Maximum",
        backgroundColor: "rgb(255, 0, 0)",
        borderColor: "rgb(255, 0, 0)",
        visible: true,
        data: [
                100,100,100,100,100,100,100,100,100,100,
                100,100,100,100,100,100,100,100,100,100,
                100,100,100,100,100,100,100,100,100,100,
                100,100,100,100,100,100,100,100,100,100,
                100,100,100,100,100,100,100,100,100,100,
                100,100,100,100,100,100,100,100,100,100
              ]
      },
      {
        label: "Left",
        backgroundColor: "rgb(60, 179, 113)",
        borderColor: "rgb(60, 179, 113)",
        hidden: false,
        data:[
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0
        ]
      },
      {
        label: "Right",
        backgroundColor: "rgb(0, 0, 255)",
        borderColor: "rgb(0, 0, 255)",
        hidden: false,
        data: [
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0,
          0,0,0,0,0,0,0,0,0,0
        ]
      },
      {
        label: "Minimum",
        backgroundColor: "rgb(255, 165, 0)",
        borderColor: "rgb(255, 165, 0)",
        visible: true,
        data: [
                30,30,30,30,30,30,30,30,30,30,
                30,30,30,30,30,30,30,30,30,30,
                30,30,30,30,30,30,30,30,30,30,
                30,30,30,30,30,30,30,30,30,30,
                30,30,30,30,30,30,30,30,30,30,
                30,30,30,30,30,30,30,30,30,30
          ]
      },
    ],
  })
  const [graphSetup, setGraphSetup] = useState({
    lines: {
      right: {show: true},
      left: {show: true}
    }
  });

  useEffect(() => {
  });

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  const timeout = () => {
    setTimeout( () => {
      let copy = dataGraph;
      copy.datasets[1].data.unshift(getRandomInt(150));
      copy.datasets[1].data.pop();
      copy.datasets[2].data.unshift(getRandomInt(150));
      copy.datasets[2].data.pop();
      // copy.datasets[2].hidden = true;
      // setDataGraph(copy);
      count++;
      timeout();
    }, 10000);
  }
  timeout();
   
  const [isLogin, setIsLogin] = useState(false);
  const [count, setCount] = useState(0);
  const [testObj, setTestObj] = useState({testString:"blabla"});

  useInterval(() => {
      setCount(count + 1)
    },1000)

  return (
    <div className="App">
      {(isLogin) ? <Main testObj={testObj} setIsLogin={setIsLogin} dataGraph={dataGraph} setDataGraph={setDataGraph} graphSetup={graphSetup} setGraphSetup={setGraphSetup}/> : <EntranceManagement setTestObj={setTestObj} setIsLogin={setIsLogin}/>}
      <Footer/>
      <h2>{testObj.testString}</h2>
    </div>
  );
}

export default App;