import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './JS/store';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.unmountComponentAtNode(rootElement);

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
