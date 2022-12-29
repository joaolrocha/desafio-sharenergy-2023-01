import { Button } from "@mui/material";

interface ButtonProps {
  isActive?: any
  clicked?: any
}

function ButtonHome({ isActive, clicked }: ButtonProps) {
  return (
    
    <Button variant="contained">Get User</Button>
  )
}

export default ButtonHome