import PropTypes from 'prop-types';

export default function TextField(props) {
  return (
    <div className="form-floating">
      <input 
        id={props.id}
        className="form-control"
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        autoFocus={props.autoFocus}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
}