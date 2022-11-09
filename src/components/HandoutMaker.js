import classNames from 'classnames';
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
  const [isReadable, setIsReadable] = useState(true);
  const [font, setFont] = useState('royal');
  const [fontSize, setFontSize] = useState('20');
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const scroll = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    downloadImage(scroll.current);
  }

  const handleFontChange = (value) => {
    const isRareFont = value === 'fiendish' || value === 'runic' || value === 'draconic' || value === 'rellanic';
    setIsReadable(!isRareFont);
    setFont(value);
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
      <div className="row mb-3 w-sm-50">
          <div className="col-12 mb-3 col-sm-6 mb-sm-0">
            <SelectField
              id="fontSelector"
              label="Font Style"
              onChange={(e) => handleFontChange(e.target.value)}
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
            {!isReadable && (
              <div className="alert alert-warning" role="alert">
                <p className="mb-0">NOTE: The selected font does not support all characters. We are working on a solution, but in the meantime, keep an eye out for empty squares in your text.</p>
              </div>
            )}
          </div>
          <div className="col-12 col-sm-6">
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

        <p className="ms-1 mb-0">Write your message here.</p>
        
        <ScrollPreview
          className={classNames(
            'd-flex',
            'mb-3',
          )}
          ref={scroll}
          background={background}
          font={font}
          fontSize={fontSize}
        />

        <button type="submit" className="mt-2 btn btn-secondary">Download Image</button>
      </form>
  </>);
}