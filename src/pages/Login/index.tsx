import { Button, Card, CardContent, CardHeader, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
// import {SendIcon} from '@mui/icons-material';
import FieldInput from '../../components/FieldInput';
import './styles.css';

function LoginPage() {
  return (
    <div className="home-container">
      <Card>
        <CardHeader>
          <img id="logo" src='/assets/sharenergy.png' alt="logo" />
        </CardHeader>
        <CardContent>
          <FormGroup className='form-container'>
            <FieldInput label="Usuario" />
            <FieldInput label="Senha" type="password" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
            <Button
              variant="contained"
              size="large"
            // endIcon={<SendIcon />
            // }
            >
              Entrar
            </Button>
          </FormGroup>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage