import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PracticePage from './PracticePage'
import PracticeSummary from './PracticeSummary'
import PracticeSetup from './PracticeSetup'
import PreviousPractice from './PreviousPractice'
import PatientDetails from './PatientDetails';
import { CDBContainer } from "cdbreact";

const Page = ({dataGraph, setDataGraph}) =>  {
 
    return (
        <div>
            <div className="App">
                <div className="auth-wrapper mt-5">
                    <PatientDetails/>
                        <Routes>
                            {/* <Route exact path='/' element={<PracticePage dataGraph={dataGraph} setDataGraph={setDataGraph}/>} /> */}
                            <Route exact path='/' element={<PracticePage />} />
                            <Route path="/practiceSetup" element={<PracticeSetup/>} />
                            {/* <Route path="/practicePage" element={<PracticePage dataGraph={dataGraph} setDataGraph={setDataGraph}/>} /> */}
                            <Route path="/practicePage" element={<PracticePage/>} />
                            <Route path="/practiceSummary" element={<PracticeSummary/>} />
                            <Route path="/previousPractice" element={<PreviousPractice/>} />
                        </Routes>
                </div>
            </div>
        </div>
    )
}
export default Page;