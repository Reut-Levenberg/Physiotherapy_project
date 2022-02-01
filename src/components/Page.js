import react,{Component} from 'react'
import {PracticePage} from './PracticePage'
import {Home} from './Home'
import {Setup} from './PracticeSetup'

export class Page extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {(this.props.page == 'Home') ? <Home/>:''}
                {(this.props.page == 'PracticePage') ? <PracticePage/>:''}
                {(this.props.page == 'Setup') ? <Setup/>:''}

                
            </div>
        )
    }
}