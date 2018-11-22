import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { enthusiasm } from './reducers/index';

const store:Store<any> = createStore(enthusiasm ,{
  level: 1,
  name: 'TypeScript',
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
