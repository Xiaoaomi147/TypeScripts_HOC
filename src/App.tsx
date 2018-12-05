
import * as React from 'react';


import { Hello, Header, Dome, Loader } from './components/index'
import Hello2 from './containers/Hello'
import './App.scss';
import './style/style.scss'
class App extends React.Component {
  public render() {
    return (
      <div className="App">
       <Header/>
        <Hello name="TypeScript" level={1}/>
        <Hello2 />
        <Dome />
        <Loader />
      </div>
    );
  }
}

export default App;
