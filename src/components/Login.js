import { useSelector, useDispatch } from 'react-redux';
import {changeLogin} from '../actions/index'

const Login = () => {
    // const state = useSelector((state) => state.isLogin);
    const dispatch = useDispatch();

    return (
        <form>
            <h3>כניסה</h3>

            <div className="form-group">
                {/* <label>שם משתמש</label> */}
                <input type="email" className="form-control" placeholder="שם משתמש" />
            </div>

            <div className="form-group">
                {/* <label>סיסמא</label> */}
                <input type="password" className="form-control" placeholder="סיסמא" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">זכור אותי</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={() => dispatch(changeLogin())}>אישור</button>
            <p className="forgot-password text-right">
                ?שכחת <a href="#">סיסמא</a>
            </p>
        </form>
    );

}
export default Login;