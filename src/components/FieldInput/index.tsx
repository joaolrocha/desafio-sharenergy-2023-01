import TextField from '@mui/material/TextField';
import './styles.css'
interface InputProps{
  label?:string
}
function FieldInput({label}: InputProps) {
  return (
    <div className="input-container">
      {label? <label>{label}</label> : null}
      <TextField required id="outline-required" placeholder={label} variant="filled" />
    </div>
  )
}

export default FieldInput