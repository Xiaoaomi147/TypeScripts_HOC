
import React from 'react';
import { createBrowserHistory} from 'history';
import {Route, Switch, Router} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import {History} from 'history';
import routerconfig from './RouterConfig';
import './App.scss';
import './style/style.scss'

export interface Iprops {
  history: History
}
interface IState {}
class App extends React.Component< Iprops, IState > {
  public render() {
    const { history } = this.props
    return (
      <ConnectedRouter history={ history }>
        <div className="App">
          <Router history={ createBrowserHistory() }>
            <Switch>
              {routerconfig.map((item, index) => (
                  <Route
                    key={index}
                    path={item.path}
                    component={item.component}
                    exact
                  />
                ))}
            </Switch>
          </Router>
        </div>
        </ConnectedRouter>
    );
  }
}

export default App;
