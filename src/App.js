import React from 'react';
import logo from './logo.svg';
import './App.css';
// import GroceryCart from './GroceryCart';
import EditProfile from './Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Codecademy!
        </p>
        {/* <GroceryCart /> */}
        <EditProfile />    
              
      </header>
    </div>
  );
}


export default App;
