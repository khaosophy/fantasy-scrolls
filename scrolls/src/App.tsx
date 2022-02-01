import React from 'react';
import ScrollForm from './components/ScrollForm';
import ScrollPreview  from './components/ScrollPreview';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fantasy Scroll Maker</h1>
      <div
        style={{ 
          display: 'flex',
        }}
      >
        <ScrollForm/>
        <ScrollPreview />
      </div>
    </div>
  );
}

export default App;
