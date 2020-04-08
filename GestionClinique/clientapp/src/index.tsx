import  React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from './App';
import Main from './components/pages/Main'
import Login from './components/pages/LoginComponent'
import * as serviceWorker from './serviceWorker';

if (localStorage.getItem("isLogged")== "yes"){
    ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root')); 
}else{
    ReactDOM.render(<BrowserRouter><Login/></BrowserRouter>, document.getElementById('root'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
