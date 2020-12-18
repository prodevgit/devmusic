import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';



class App extends React.Component {
 
  render(){ 
    return (
      <div className="App">
        <Sidebar></Sidebar>
      </div>
    );
  }
}

export default App;
