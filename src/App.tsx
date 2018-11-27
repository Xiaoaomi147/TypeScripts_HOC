import * as React from 'react';
import './App.css';
import { Hello, Header } from './components/index'
import Hello2 from './containers/Hello'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
       <Header/>
        <Hello name="TypeScript" level={1}/>
        <Hello2 />
      </div>
    );
  }
}

export default App;
