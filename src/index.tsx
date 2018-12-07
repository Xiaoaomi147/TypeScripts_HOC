import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProviderUtility from './utilities/ProviderUtility';
import IStore from './stores/IStore'
// tslint:disable-next-line:ordered-imports
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory, History } from 'history';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

const initialState: Partial<IStore> = {
};

// const history: History = createBrowserHistory();
// const store:Store<any> = createStore(enthusiasm ,{
//   level: 1,
//   name: 'TypeScript',
// })
const history: History = createBrowserHistory();
const store: IStore = ProviderUtility.createProviderStore(initialState, history);
// const rootEl: HTMLElement | null = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Provider store={ store }>
      <App history={history}/>
    </Provider>
  </AppContainer>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();