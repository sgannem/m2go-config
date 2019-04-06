import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/home/App';
// import LoginForm from './components/login/loginpage';
import App from './components/login/loginpage';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<LoginForm />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
