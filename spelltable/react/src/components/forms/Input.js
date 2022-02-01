export default function Input(props) {
  return (
    <input 
      className="input"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder || ''}
    />
  )
}