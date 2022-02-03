import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavigationBar = ({setIsLogin}) => {

    const hanleLogedOut = (page) =>{
        setIsLogin(false);            
    }

    return (
        <div> 
                <nav className="navbar navbar-expand-lg navbar-light fixed-top mb-5">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/PracticeSetup"}>Practice Setup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/practicePage"}>Practice Page</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/practiceSummary"}>Practice Summary</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/previousPractice"}>Previous Practice</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>  
        </div>
    )

}
export default NavigationBar;