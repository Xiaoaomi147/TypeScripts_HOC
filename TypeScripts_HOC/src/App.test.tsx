import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { History, createBrowserHistory } from 'history';
import App from './App';
const history: History = createBrowserHistory();
it('renders without crashing', () => {
  const div: HTMLElement = document.createElement('div');
  ReactDOM.render(<App  history={ history }/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
