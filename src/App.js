import { useRef, useState } from 'react';
// import { BsInfoCircle as InfoCircle } from 'react-icons/bs';
import downloadImage from './utils/downloadImage';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollPreview  from './components/ScrollPreview';
// import InstructionsModal from './components/InstructionsModal';

function App() {
  const background = 'Y1.png';
  // const [background, setBackground] = useState('Y1.png');
  const [font, setFont] = useState('royal');
  const [fontSize, setFontSize] = useState('20');
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const scroll = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    downloadImage(scroll.current);
  }  
  
  return (<>
    <Header />
      {/* <InstructionsModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} /> */}
      <main className="container">
        <div className="d-flex align-items-center justify-content-between mt-3 mb-4">
          <h1>Fantasy Scroll Maker</h1>
          {/* <button
            className="btn btn-link d-flex align-items-center"
            onClick={() => setIsModalOpen(true)}
          >
            How does this work?&nbsp;<InfoCircle />
          </button> */}
        </div>

        {/* todo: split up the form? the scroll no longer needs to be *in* the form. the controls can be their own component */}
        <form className="flex-grow-1" onSubmit={onSubmit}>
        <div className="row mb-3 w-50">
            <div className="col">
              <label htmlFor="fontSelector">Font Style</label>
              <select
                id="fontSelector"
                className="form-select"
                onChange={(e) => setFont(e.target.value)}
                value={font}
              >
                <option value="royal">Royal</option>
                <option value="elegant">Elegant</option>
                <option value="blocky-1">Blocky 1</option>
                <option value="blocky-2">Blocky 2</option>
                <option value="fiendish">Abyssal/Infernal</option>
                <option value="runic">Dwarvish/Gnomish/Giant</option>
                <option value="draconic">Draconic</option>
                <option value="rellanic">Elvish/Sylvan/Undercommon</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="fontSize">Font Size (px)</label>
              <input 
                type="number"
                min="1"
                max="250"
                className="form-control"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              />
            </div>
            {/* <div className="col">
              <label htmlFor="bgSelector">Background</label>
              <select 
                id="bgSelector"
                className="form-select"
                onChange={(e) => setBackground(e.target.value)}
                value={background}
              >
                <option value="R1.png">Red</option>
                <option value="Y1.png">Yellow</option>
                <option value="G1.png">Green</option>
                <option value="B1.png">Blue</option>
              </select>
            </div> */}
          </div>
          
          <ScrollPreview
            ref={scroll}
            background={background}
            font={font}
            fontSize={fontSize}
          />

          <button type="submit" className="mt-2 btn btn-secondary">Download Image</button>
        </form>
      </main>
    <Footer />
  </>);
}

export default App;
