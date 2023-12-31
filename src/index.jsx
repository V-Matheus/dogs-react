import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.jsx';
import {Provider} from 'react-redux'
import store from './store/configureStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
