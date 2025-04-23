// src/App.js
import React from 'react';
import './App.css';

const changeText = (event) => {
  event.target.innerText += " 被點了";
};

function App() {
  const styleArgument = {
    cursor: 'pointer',
    userSelect: 'none',
  };

  return (
    <div className="App">
      <h1 style={styleArgument} onClick={changeText}>
        hello CGU!!
      </h1>
    </div>
  );
}

export default App;
