import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RegReducer from './Store/Registration/RegReducer';
import ProductReducer from './Store/Product/ProductReducer';
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })) || compose;



const rootReducer = combineReducers({
  RegReducer: RegReducer,
  ProductReducer: ProductReducer
});


const wrapperStore = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));




ReactDOM.render(
  <Provider store={wrapperStore}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>,
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
