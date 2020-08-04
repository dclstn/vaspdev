import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import Root from './root';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Root/>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
