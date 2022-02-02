import react,{Component} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {PracticePage} from './PracticePage'
import {PracticeSummary} from './PracticeSummary'
import {PracticeSetup} from './PracticeSetup'
import {PreviousPractice} from './PreviousPractice'

export class Page extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="App">
                    <div className="auth-wrapper mt-5">
                            <Routes>
                                <Route exact path='/' element={<PracticePage dataGraph={this.props.dataGraph} graphSetup={this.props.graphSetup} setGraphSetup={this.props.setGraphSetup}/>} />
                                <Route path="/practiceSetup" element={<PracticeSetup/>} />
                                <Route path="/practicePage" element={<PracticePage dataGraph={this.props.dataGraph} graphSetup={this.props.graphSetup} setGraphSetup={this.props.setGraphSetup}/>} />
                                <Route path="/practiceSummary" element={<PracticeSummary/>} />
                                <Route path="/previousPractice" element={<PreviousPractice/>} />
                            </Routes>
                    </div>
                </div>
            </div>
        )
    }
}