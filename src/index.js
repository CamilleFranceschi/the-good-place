import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PlaceList from './containers/place-list';
import Landing from './components/landing';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          < Route path='/places' component={PlaceList} />
          < Route path='/' component={Landing} />
          {/* carte */}
          
          {/* < Route path='/places/:id' component={}/> */}
          {/* < Route path='' component={}/> */}
        </Switch>
      </div>
    </ BrowserRouter >
  </Provider>, document.getElementById('root')
);
registerServiceWorker();


