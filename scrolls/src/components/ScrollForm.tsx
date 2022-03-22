type FormProps = {
  background: string,
  onBackgroundChange: React.Dispatch<React.SetStateAction<string>>,

  font: string,
  onFontChange: React.Dispatch<React.SetStateAction<string>>,

  fontSize: string,
  onFontSizeChange: React.Dispatch<React.SetStateAction<string>>,

  downloadImage: () => void,
}

const ScrollForm = (props: FormProps) => {
  
  function onSubmit(event: any) {
    event.preventDefault();
    props.downloadImage();
  }

  return (
    <form className="flex-grow-1" onSubmit={onSubmit}>
      <div className="mb-3">
        {/* scroll will go here */}
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="fontSelector">Font Style</label>
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
        <div className="col-6">
          <label htmlFor="fontSize">Font Size (px)</label>
          <input 
            type="number"
            className="form-control"
            value={props.fontSize}
            onChange={(e) => props.onFontSizeChange(e.target.value)}
          />
        </div>
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
}

export default ScrollForm;