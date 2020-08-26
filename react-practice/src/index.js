import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import data from './data.json';

ReactDOM.render(
    <BrowserRouter>
      <App data={data} />
    </BrowserRouter>,
  document.getElementById('root')
);
