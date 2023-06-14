import PropTypes from 'prop-types';

export default function CheckboxField(props) {
  return (
    <div className="form-check">
      <input 
        id={props.id}
        className="form-check-input"
        type="checkbox"
        value={props.value}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  )
}

CheckboxField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}