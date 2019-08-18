import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import Ludwig from 'ludwig-module';

console.log(Ludwig())

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
