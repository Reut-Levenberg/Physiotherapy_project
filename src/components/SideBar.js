import react,{Component} from 'react'

export class SideBar extends Component {

    handleRightShow = () => {
        let copy = this.props.graphSetup;
        copy.lines.right.show = !copy.lines.right.show;
        this.props.setGraphSetup(copy);
    }

    handleLeftShow = () => {
        let copy = this.props.graphSetup;
        copy.lines.left.show = !copy.lines.left.show;
        this.props.setGraphSetup(copy);
    }



    render() {
        return (
            <div className='sideBar d-flex'>
                <ul className="list-group-flush">
                    <li className="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" checked={this.props.graphSetup.lines.left.show} onClick={this.handleLeftShow}/>
                        Left
                    </li>
                    <li className="list-group-item">
                        <input class="form-check-input me-1" type="checkbox"  checked={this.props.graphSetup.lines.right.show} onClick={this.handleRightShow}/>
                        Right
                    </li>
                </ul>
            </div>
        )
    }
}