import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdeasContainer from './components/IdeasContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Idea Board</h1>
        <div>
          <IdeasContainer />
        </div>
      </header>
    </div>
  );
}

export default App;
