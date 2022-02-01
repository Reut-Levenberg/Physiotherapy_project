import react,{Component, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './Footer'
import {NavigationBar} from './NavigationBar'
import {Page} from './Page'

export class Main extends Component {

    render() {
        return (
            <div className="App">
            <NavigationBar/>
            {/* <Page page={page}/> */}
          </div>
        )
    }
}


