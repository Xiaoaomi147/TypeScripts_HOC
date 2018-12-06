
import * as React from 'react';
import {History} from 'history';
import { ConnectedRouter } from 'connected-react-router'
import {Route, Switch} from 'react-router-dom';
import Hello2 from './containers/Hello'
import './App.scss';
import './style/style.scss'

interface Iprops {
  history: History;
}
interface IState {}
class App extends React.Component< Iprops, IState > {
  public render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className="App">
          <Hello2 />
          <Switch>

          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
