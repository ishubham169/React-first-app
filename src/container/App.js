import React, {Component} from 'react';
import './App.css';
import Char from '../components/Chars/Chars';

class App extends Component {

 render(){
    return <div>
              <h1 className="App">Update Lifecycle Demonstration</h1>
              <div>
                <Char/>
              </div>
           </div>
  }
}

export default App;
