import react,{useState } from 'react';
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import SideBar from './SideBar';

const PracticePage = ({dataGraph, setDataGraph}) =>  {
    
  console.log('dataGraph.datasets[1].hidden ---> ',dataGraph.datasets[1].hidden);
  console.log('dataGraph.datasets[1].data ---> ',dataGraph.datasets[1].data);

  return (
      <div className='d-flex'>
          <SideBar dataGraph={dataGraph} setDataGraph={setDataGraph}/>
            <CDBContainer>
              <Line data={dataGraph} options={{responsive: true}} />
            </CDBContainer>              
      </div>
  )
}
export default PracticePage;