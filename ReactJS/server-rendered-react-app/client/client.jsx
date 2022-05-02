import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'


function render () {
  ReactDOM.hydrate(<App/>, document.querySelector('#root'))
}

// ReactDOM.render(<App/>, document.getElementById("root"));
render();