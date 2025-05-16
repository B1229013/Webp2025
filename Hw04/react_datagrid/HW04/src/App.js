import React from 'react';
import DataGridComponent from './index'; // No curly braces needed
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Attraction Sightseeing Exhibition Information</h1>
      <DataGridComponent />  {/* Rendering the DataGridComponent */}
    </div>
  );
}

export default App;
