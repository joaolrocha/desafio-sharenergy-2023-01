import TextField,{TextFieldProps} from '@mui/material/TextField';
import './styles.css'

function FieldInput({label, ...props}: TextFieldProps) {
  return (
    <div className="input-container">
      {label? <label>{label}</label> : null}
      <TextField required id="outline"  hiddenLabel variant="filled" {...props} />
    </div>
  )
}

export default FieldInput