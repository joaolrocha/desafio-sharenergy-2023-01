import { Box, FormControl, Input } from "@mui/material";
import { useState } from "react";
import './styles.css';


function HttpPage() {
  const [input, setInput] = useState("")

  function handlerInput(event: any) {
    setInput(event.target.value)
  }

  return (
    <div className="http-container">
      <FormControl fullWidth>
        <Input onChange={handlerInput} value={input} />
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={`https://http.cat/${input}`} onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg";
        }} />
      </Box>
    </div>
  );
}


export default HttpPage;