import react,{Component, useState } from 'react';
import { Line } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import {SideBar} from './SideBar';

export class PracticePage extends Component {
   
  constructor(props) {
    super(props);
  }

  editDataGraph = (dataGraph) => {
    // if(!this.props.lines.right.show){
      // dataGraph.datasets.splice(1, 1);
    // }
    // if(!this.props.lines.left.show){
      // dataGraph.datasets.splice(2, 1);
    // }
    // return dataGraph;
  }
    
  render() {
    this.editDataGraph(this.props.dataGraph);
    let copyDataGraph = this.props.dataGraph;
    return (
        <div className='d-flex'>
            <SideBar graphSetup={this.props.graphSetup} setGraphSetup={this.props.setGraphSetup}/>
              <CDBContainer>
                <Line data={copyDataGraph} options={{ responsive: true }} />
              </CDBContainer>              
        </div>
    )
  }
}