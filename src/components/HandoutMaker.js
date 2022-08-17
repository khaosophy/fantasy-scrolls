import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
// import { BsInfoCircle as InfoCircle } from 'react-icons/bs';
import downloadImage from '../utils/downloadImage';
import NumberField from './NumberField';
import ScrollPreview  from './ScrollPreview';
import SelectField from './SelectField';
// import InstructionsModal from '../components/InstructionsModal';

export default function HandoutMaker() {
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
      {/* <InstructionsModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} /> */}
      <div className="d-flex align-items-center justify-content-between mt-3 mb-4">
        <Helmet>
          <title>Handout Maker</title>
        </Helmet>
        <h1>Handout Maker</h1>
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
            <SelectField
              id="fontSelector"
              label="Font Style"
              onChange={(e) => setFont(e.target.value)}
              value={font}
              options={[
                {
                  label: 'Royal',
                  value: 'royal',
                },
                {
                  label: 'Elegant',
                  value: 'elegant',
                },
                {
                  label: 'Blocky 1',
                  value: 'blocky-1',
                },
                {
                  label: 'Blocky 2',
                  value: 'blocky-2',
                },
                {
                  label: 'Abyssal/Infernal',
                  value: 'fiendish',
                },
                {
                  label: 'Dwarvish/Gnomish/Giant',
                  value: 'runic',
                },
                {
                  label: 'Draconic',
                  value: 'draconic',
                },
                {
                  label: 'Elvish/Sylvan/Undercommon',
                  value: 'rellanic',
                },
              ]}
            />
          </div>
          <div className="col">
            <NumberField
              id="fontSize"
              label="Font Size (px)"
              min="1"
              max="250"
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
  </>);
}