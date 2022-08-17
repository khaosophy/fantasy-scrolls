import PropTypes from 'prop-types';

export default function NumberField(props) {
  return (
    <div className="form-floating">
      <input 
        id={props.id}
        className="form-control"
        type="number"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder || props.label}
        required={props.required}
        disabled={props.disabled}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

NumberField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}