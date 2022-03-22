import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import ScrollForm from './components/ScrollForm';
import ScrollPreview  from './components/ScrollPreview';

function App() {
  const [message, setMessage] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
  const [background, setBackground] = useState('Y1.png');
  const [font, setFont] = useState('royal');
  const [fontSize, setFontSize] = useState('16');
  const scroll = useRef(null);

  const downloadImage = (): void => {
    if(!scroll.current) return;
    html2canvas(scroll.current)
      .then(canvas => {        
        const link = document.createElement('a');
        link.download = 'scroll.png';
        link.href = canvas.toDataURL();
        link.click();
        link.remove();
      });
  }
  
  return (
    <div className="App container">
      <h1 className="mt-3 mb-4">Fantasy Scroll Maker</h1>
      
      <ScrollForm 
        message={message}
        onMessageChange={setMessage}

        background={background}
        onBackgroundChange={setBackground}

        font={font}
        onFontChange={setFont}

        fontSize={fontSize}
        onFontSizeChange={setFontSize}

        downloadImage={downloadImage}
      />

      <ScrollPreview
        ref={scroll}
        message={message}
        background={background}
        font={font}
        fontSize={fontSize}
      />
    </div>
  );
}

export default App;
