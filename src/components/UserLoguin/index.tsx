import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';

function UserLoguin() {
  return (
    <div className="home-container">
      <div className="img-energy">
        <img src='{Logo}' alt="logo" />
      </div>
      <div className="input-home-user">
        <h1>Loguin</h1>
        <TextField required id="outline-required" label="required" variant="filled" />
      </div>
      <div className="input-home-password">
        <h1>Password</h1>
        <TextField required id="outline-required" label="required" variant="filled" />
      </div>
      <div className="button-home-remember">
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        </FormGroup>
      </div>
      <div className="button-home-send">
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </div>
  )
}

export default UserLoguin