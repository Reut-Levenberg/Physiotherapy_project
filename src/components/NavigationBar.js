import react,{Component} from 'react'

export class NavigationBar extends Component {

    constructor(props) {
        super(props);
    }

    selectPage = (page) =>{
        // this.props.onSelectPage(page);            
    }

    render() {
        return (
            <div className='container'>
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onClick={() => this.selectPage('Home')}>Home</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onClick={() => this.selectPage('PracticePage')}>Practice</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onClick={() => this.selectPage('Setup')}>Setup</a>
                        </li>
                    </ul>
                </div>
                </nav>
        </div>
        )
    }
}