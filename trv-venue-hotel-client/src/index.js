import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

let user = JSON.parse(localStorage.getItem("user"));
if (!user) {
	user = { name: 'John', last_name: 'Doe', user_name: 'john123' };
	localStorage.setItem('user', JSON.stringify(user));
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
