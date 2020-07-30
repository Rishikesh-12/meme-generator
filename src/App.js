import React, {Component} from 'react';
import './App.css';

import Header from './Component/Header/Header'
import MemeGenerator from './Component/Meme/MemeGenerator'

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <MemeGenerator />
      </div> 
    )
  }
}
  

export default App;
