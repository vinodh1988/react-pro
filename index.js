/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Notification from './components/Notification'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {state} from './redux/Map'
import {Provider} from 'react-redux'
import {NotificationFin} from './redux/Notifyact'


const store = createStore(state,applyMiddleware(thunk));
store.dispatch(NotificationFin())

const Root = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )
AppRegistry.registerComponent(appName, () => Root);
