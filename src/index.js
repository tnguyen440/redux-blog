import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import routes from './routes';

import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
