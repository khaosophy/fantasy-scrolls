import PropTypes from 'prop-types';

export default function SelectField(props) {
  return (
    <div className="form-floating">
      <select id={props.id} className="form-select">
        {props.options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  )
}

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
}