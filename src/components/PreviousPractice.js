import Accordion from 'react-bootstrap/Accordion'
// import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
// import CanvasJSReact from './canvasjs.react';
// import {CanvasJSChart} from 'canvasjs-react-charts'
// import Chart from 'canvasjs';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import { Bar } from "react-chartjs-2";
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";
import { CDBContainer } from "cdbreact";



ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, BarElement);


const PreviousPractice = () =>  {
    var Plot = createPlotlyComponent(Plotly);

    // setAriaExpanded=()=>{
        //     document.getElementsByClassName("link help js-help").setAttribute("aria-expanded", "true");
        
        // }var ctxBc = document.getElementById('bubbleChart').getContext('2d');
        const lst = [
            {title: "22/02/2022", time: 9, kg: 1.5},
            {title: "23/02/2022", time: 5, kg: 4.5},
            {title: "24/02/2022", time: 10, kg: 2.5},
            {title: "25/02/2022", time: 10, kg: 2.5},
            {title: "26/02/2022", time: 11, kg: 2},
            {title: "27/02/2022", time: 11, kg: 2},
            {title: "28/02/2022", time: 11, kg: 2.5},
            {title: "29/02/2022", time: 12, kg: 2.5},
            {title: "30/02/2022", time: 12, kg: 2.5},
            {title: "31/02/2022", time: 12, kg: 2.5},
        ]
        // const data1 = {
        //     labels: [lst.map(item => item.title)],
        //     datasets: [
        //         {
        //             label: 'Time',
        //             data: [lst.map(item => item.time)],
        //             backgroundColor: "red",
        //         },
        //         {
        //             label: 'KG',
        //             data: [lst.map(item => item.kg)],
        //             backgroundColor: "blue",
        //         }, 
        //     ]
        // };

        // let lst = [{title: "25/02/2022", time: 9, kg: 1.5}, {title: "22/02/2022", time: 10, kg: 1.5}]
        let obj = {
            labels: [],
            datasets: [
                {
                    label: 'זמן אימון',
                    data: [],
                    backgroundColor: "red",
                    direction: "rtl",
                },
                {
                    label: ' (ק"ג) משקל',
                    data: [],
                    backgroundColor: "blue",
                    direction: "rtl",
                }, 
            ]  
        }
        let { labels, datasets } = obj;
        lst.forEach(element => {
            labels.push(element.title);
            datasets[0].data.push(element.time);
            datasets[1].data.push(element.kg);
        });
        // console.log(obj);

        
        // var CanvasJSReact = require('./canvasjs.react');
    // var CanvasJSChart = CanvasJSReact.CanvasJSChart;


    // var CanvasJS = CanvasJSReact.CanvasJS;

    // var Charts = new ChartJS.Chart();
    return (
        <div >
            
            {/* <h4>אימונים קודמים:</h4> */}
            {/* <Bar data = {data1} options={ {width: 900, height: 600, title: 'גרף האימון'}}/>      */}
            {/* <Bar data={obj} height= {'150px'} width= {'500px'} options={{ title: {
            display: true,
            text: 'אימונים קודמים :'
        }, plugins: {legend: { display: true, position: "bottom"}}}}/>; */}

            <CDBContainer>
            <Plot data={[
          {type: 'bar', x: obj.labels, y: obj.datasets[0].data, name: 'זמן אימון'},
          {type: 'bar', x: obj.labels, y: obj.datasets[1].data, name: '(ק"ג) משקל'},
        ]}
        layout={ {width: 900, height: 500, title: 'אימונים קודמים'} }/>
          </CDBContainer>
        </div>
        
    )
}
export default PreviousPractice;

{/* <Bar data={obj} layout={ {width: 900, height: 600, title: 'אימונים קודמים', xaxis: {showticklabels: false}}}/> */}
