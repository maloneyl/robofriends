import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
  <div>
    <Card id='1' name='Jane Doe' email='jane@doe.com' />
    <Card id='2' name='Mary Lee' email='mary@lee.com' />
    <Card id='3' name='Taylor Dunn' email='taylor@dunn.com' />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
