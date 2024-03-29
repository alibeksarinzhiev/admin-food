import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import store from './redux/index'
import {Provider} from 'react-redux'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
    </BrowserRouter>
);

