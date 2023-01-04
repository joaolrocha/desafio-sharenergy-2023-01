import { Button } from "@mui/material";

interface ButtonProps {
  isActive?: any
  clicked?: any
}

function ButtonHome({ isActive, clicked }: ButtonProps) {
  return (
    <Button onClick={clicked} variant="contained">{isActive ? "Get another user" : "Get User"}</Button>
  )
}

export default ButtonHome