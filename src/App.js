import './App.css';
import React, { useState, useEffect } from 'react';
import { useInterval } from 'usehooks-ts'
import {Footer} from './components/Footer'
import {EntranceManagement} from './components/EntranceManagement'
import {Main} from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from 'chart.js/auto'

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
      setDataGraph(copy);
      console.log(dataGraph.datasets[0].data);
      count++
      // console.log(dataGraph.datasets[1].data);
      timeout();
    }, 10000);
  }
  timeout();
   
  const [isLogin, setIsLogin] = useState(false);
  const [count, setCount] = useState(0);
  useInterval(() => {
      setCount(count + 1)
    },1000)

  return (
    <div className="App">
      {(isLogin) ? <Main setIsLogin={setIsLogin} dataGraph={dataGraph} graphSetup={graphSetup} setGraphSetup={setGraphSetup}/> : <EntranceManagement setIsLogin={setIsLogin}/>}
      <Footer/>
    </div>
  );
}

export default App;