
import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import ErrorBoundaryRoute from './components/ErrorBoundaryRoute';
import BasicLayout from './layouts/BasicLayout';
import Login from './router/login/LoginAsync';
import './App.scss';
import './style/style.scss'

export interface Iprops {
  history: History,
}


class App extends React.Component< Iprops > {
  public render() {
    const { history } = this.props
    return (
      <ConnectedRouter history={ history }>
                <Switch>
                  <ErrorBoundaryRoute path='/login' component={ Login } />
                  <BasicLayout history={ history }/>
                </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;
