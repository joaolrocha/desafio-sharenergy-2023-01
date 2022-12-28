import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FieldInput from '../FieldInput';

import './styles.css';

function UserLogin() {
  return (
    <div className="home-container">
      <div className='home-content-container'>
        <div className="img-energy">
          <img src='/assets/sharenergy.png' alt="logo" />
        </div>
        <div className='input-home'>
          <FieldInput
            label="username"
          />
          <FieldInput label="password" />
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
    </div>
  )
}

export default UserLogin