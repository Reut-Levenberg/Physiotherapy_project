import cloneDeep from 'lodash/cloneDeep';

const SideBar = ({dataGraph, setDataGraph}) =>  {
    
    const handleLeftShow = () => {
        // copyDataGraph = cloneDeep(dataGraph);
        // let copy = dataGraph;
        // copy.datasets[1].hidden = !copy.datasets[1].hidden;
        // setDataGraph(copy);
    }

    const handleRightShow = () => {
        // let copy = cloneDeep(dataGraph);
        // let copy = dataGraph;
        // copy.datasets[2].hidden = !copy.datasets[2].hidden;
        // setDataGraph(copy);
    }
    
    return (
        <div className='sideBar d-flex'>
            <ul className="list-group-flush">
                <li className="list-group-item">
                    <input class="form-check-input me-1" type="checkbox" checked={!dataGraph.datasets[1].hidden} onClick={handleLeftShow}/>Left
                </li>
                <li className="list-group-item">
                    <input class="form-check-input me-1" type="checkbox" checked={!dataGraph.datasets[2].hidden} onClick={handleRightShow}/>Right
                </li>
            </ul>
        </div>
    )
}
export default SideBar;