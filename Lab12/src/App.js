
import React from 'react';
import Button from '@mui/material/Button';  // Correct import for MUI v5
import './App.css';
import IconButton from '@mui/material/IconButton';  // Correct import for MUI v5
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + " 被點了";  // Append " 被點了" to the button text
};

const styleArgument = {
  text: {
    fontSize: '48px',  // Large font size
    color: 'red',      // Red color
    fontWeight: 'bold' // Bold font
  },
  iconContainer: {
    marginTop: '20px', // Add margin above icons
  },
};

const HelloCGU = () => {
  return <h1 style={styleArgument.text}>Hello CGU!!</h1>;  // Apply the red color and large font
};

const multiButton = (num) => {
  var output = [];
  output.push(
    <IconButton color="primary" aria-label="add to shopping cart">
      <AddShoppingCartIcon />
    </IconButton>
  );
  output.push(
    <IconButton color="primary" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  );
  output.push(
    <IconButton color="primary" aria-label="add an alarm">
      <AlarmIcon />
    </IconButton>
  );
  return output;
};

function App() {
  return (
    <div className="App">
      <div>
        <HelloCGU />  {/* Render HelloCGU component */}
      </div>
      <div>
        {multiButton(10)}  {/* Render the 10 buttons */}
      </div>
    </div>
  );
}

export default App;
