import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar'
import Page from './Page'

const Main = ({testObj, setIsLogin, dataGraph, setDataGraph, graphSetup, setGraphSetup}) => {

    return (
        <div className="App">
            <NavigationBar setIsLogin={setIsLogin}/>
            <Page dataGraph={dataGraph} setDataGraph={setDataGraph} graphSetup={graphSetup} setGraphSetup={setGraphSetup}/>
            <h2>{testObj.testString}</h2>
        </div>
    )
}

export default Main;
