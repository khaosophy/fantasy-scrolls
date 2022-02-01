import { useState } from 'react';
import ScrollForm from './components/ScrollForm';
import ScrollPreview  from './components/ScrollPreview';

function App() {
  const [message, setMessage] = useState('');
  
  return (
    <div className="App">
      <div className="container mt-3 mb-4">
        <h1>Fantasy Scroll Maker</h1>
      </div>
      <div className="container d-flex">
        <ScrollForm 
          message={message}
          onMessageChange={setMessage}
        />
        <ScrollPreview
          message={message}
        />
      </div>
    </div>
  );
}

export default App;
