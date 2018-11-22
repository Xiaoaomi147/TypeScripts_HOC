import * as React from 'react';
import './App.css';
import Hello from './components/hello';
import Hello2 from './components/hello2';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Hello name="TypeScript" level={1}/>
        <Hello2 name="TypeScript" level={10}/>
      </div>
    );
  }
}

export default App;
