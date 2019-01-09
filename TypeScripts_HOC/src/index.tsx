import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ProviderUtility from './utilities/ProviderUtility';
import IStore from './stores/IStore'
// tslint:disable-next-line:ordered-imports
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createBrowserHistory, History } from 'history';
import ErrorBoundary from './components/ErrorBoundary';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

const initialState: Partial<IStore> = {
};

const history: History = createBrowserHistory();
const store: IStore = ProviderUtility.createProviderStore(initialState, history);

ReactDOM.render(
  <AppContainer>
    <Provider store={ store }>
      <ErrorBoundary>
        <App history={history}/>
      </ErrorBoundary>
    </Provider>
  </AppContainer>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();