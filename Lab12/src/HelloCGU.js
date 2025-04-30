// src/App.js
import React from 'react';
import './App.css';

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText += " 被點了";  // Append " 被點了" to the button text
};


function App() {
  return (
    <div className="App">
       <h1 style = {styleArgument }onClick= {changeText}>hello CGU !!
       </h1>
    </div>
  );
}
