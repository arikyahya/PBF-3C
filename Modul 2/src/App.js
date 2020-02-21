import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import foto from './sadtom.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={foto} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
