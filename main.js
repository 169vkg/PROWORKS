import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import {createStore, combineReducers} from 'redux'
import searchReducer from './src/Store/Reducers/searchReducer'
import loginReducer from './src/Store/Reducers/loginReducer'
import Root from './Root'

const rootReducer = combineReducers ({
  searchRed : searchReducer,
  loginRed : loginReducer
})
const store = createStore(rootReducer);

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
