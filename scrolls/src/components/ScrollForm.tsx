type FormProps = {
  message: string,
  onMessageChange: React.Dispatch<React.SetStateAction<string>>,

  background: string,
  onBackgroundChange: React.Dispatch<React.SetStateAction<string>>,

  font: string,
  onFontChange: React.Dispatch<React.SetStateAction<string>>,
}

const ScrollForm = (props: FormProps) => (
  <form className="flex-grow-1">
    <div className="mb-3">
      <label htmlFor="scrollMessage">Your Message</label>
      <textarea
        id="scrollMessage"
        className="form-control" 
        style={{ height: '8rem' }}
        value={props.message}
        onChange={(e) => props.onMessageChange(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="fontSelector">Font</label>
      <select
        id="fontSelector"
        className="form-select"
        onChange={(e) => props.onFontChange(e.target.value)}
        value={props.font}
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

    <div className="mb-3">
      <label htmlFor="bgSelector">Background</label>
      <select 
        id="bgSelector"
        className="form-select"
        onChange={(e) => props.onBackgroundChange(e.target.value)}
        value={props.background}
      >
        <option value="R1.png">Red</option>
        <option value="Y1.png">Yellow</option>
        <option value="G1.png">Green</option>
        <option value="B1.png">Blue</option>
      </select>
    </div>

    <button type="submit" className="btn btn-secondary">Download Image</button>
  </form>
);

export default ScrollForm;