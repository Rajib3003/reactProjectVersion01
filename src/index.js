import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';


import './index.css';
import { Provider } from 'react-redux';
// import store from './TodoStore';
import store1 from './App/store';
import store2 from './Components/CurdComponents/App/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store1}>
    <App />
  </Provider>
  
);


