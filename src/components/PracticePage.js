import react,{useState } from 'react';
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
import cloneDeep from 'lodash/cloneDeep';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from './SideBar';
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );

const PracticePage = () =>  {
  
  const state = useSelector((state) => state.sideBar);
  let lineDate = cloneDeep(state);
  let scale = lineDate.viewScale;
  lineDate.labels = lineDate.labels.slice(0,scale);;
  for (let i = 0; i < lineDate.datasets.length; i++)
  {
    lineDate.datasets[i].data = lineDate.datasets[i].data.slice(0,scale);
  }
  
  return (
      <div className='d-flex'>
          <SideBar/>
          <CDBContainer>
            <Line data={lineDate} options={{responsive: true}} />
          </CDBContainer>              
      </div>
  )
}
export default PracticePage;