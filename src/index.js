import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <Provider store={store}>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </Provider>,
  document.getElementById('root')
);
