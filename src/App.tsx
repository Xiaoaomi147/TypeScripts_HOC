import * as React from 'react';
import './App.css';
import { Hello, Header, Dome, Loader } from './components/index'
import Hello2 from './containers/Hello'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
       <Header/>
        <Hello name="TypeScript" level={1}/>
        <Hello2 />
        <Dome />
        <Loader />
        <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
      </div>
      </div>
    );
  }
}

export default App;
