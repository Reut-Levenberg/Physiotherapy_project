import { useSelector, useDispatch } from 'react-redux';
import {changeSideBarRight, changeSideBarLeft, changeView} from '../actions/index'

const SideBar = () =>  {

    const state = useSelector((state) => state.sideBar);
    const dispatch = useDispatch();

    let defaultRangeVal = 600;
    const changeRange = () => {
        let rangeVal = document.getElementById('graphRange').value;
        // console.log(rangeVal);
        dispatch(changeView(rangeVal));
        defaultRangeVal = rangeVal;
    }

    return (
        <div>
            <div className='sideBar d-flex'>
                <ul className="list-group-flush">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" defaultChecked={!state.datasets[1].hidden} onChange={() => dispatch(changeSideBarLeft())}/>שמאל
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" defaultChecked={!state.datasets[2].hidden} onChange={() => dispatch(changeSideBarRight())}/>ימין
                    </li>
                    <li className="list-group-item">
                        <label className="form-label">קנה מידה</label>
                        <input type="range" className="form-range" min="5" max="600" step="1" id="graphRange" defaultValue={defaultRangeVal} onChange={() => dispatch(changeRange())}/>
                        <div className="d-flex justify-content-between">
                            <span>5 שניות</span>
                            <span>10 דקות</span>
                        </div>
                    </li>
                </ul>
            </div>


   
            {/* <div className="row mb-4">
                <div className="col-12">
                <div className="btn-group btn-toggle"> 
                    <button className="btn btn-sm btn-default">5 Sec</button>
                    <button className="btn btn-sm btn-primary active">10 Min</button>
                </div>
                <hr/>
                </div>
            </div> */}
            {/* <div className="form-check pl-0">
                <input className="form-check-input" type="checkbox" checked-data-toggle="toggle" data-on="10 Min" data-off="5 Sec" data-onstyle="success" data-offstyle="danger" data-size="lg"/>
            </div> */}
        </div>
    )
}
export default SideBar;