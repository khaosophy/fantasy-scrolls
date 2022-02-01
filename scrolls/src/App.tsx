import React from 'react';
import ScrollForm from './components/ScrollForm';
import ScrollPreview  from './components/ScrollPreview';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-3 mb-4">
        <h1>Fantasy Scroll Maker</h1>
      </div>
      <div className="container d-flex">
        <ScrollForm/>
        <ScrollPreview />
      </div>
    </div>
  );
}

export default App;
