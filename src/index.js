import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let languages = [
{name: 'c'},
{name: 'c++'},
{name: 'java'},
{name: 'python'},
{name: 'ruby'},
{name: 'react'},
{name: 'redux'},
{name: 'scala'},
{name: 'angular'},
{name: 'node'},
{name: 'javascript'},
{name: 'PHP'},
{name: 'C#'},
];

ReactDOM.render(<App items={languages} />, document.getElementById('root'));

