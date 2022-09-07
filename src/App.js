import React from 'react'
import './App.css';
import Header from './Components/Header';
import Stars from './Components/Stars';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Stars />
      </header>
    </div>
  );
}

export default App;
