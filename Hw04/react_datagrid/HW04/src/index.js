import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18
import './index.css';  // Import your CSS
import DataGridComponent from './DataGridComponent';  // Import the newly created component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridComponent />);  // Render the DataGridComponent in the root element

