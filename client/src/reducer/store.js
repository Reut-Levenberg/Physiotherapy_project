import {createStore} from 'redux';
import reducers from './index'

export const store = createStore( reducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  