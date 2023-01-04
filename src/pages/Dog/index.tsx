import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import './styles.css'
function DogPage() {
  const [data, setData] = useState<null| any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onClickHandler = () => {
    setLoading(true);
    axios.get('https://random.dog/woof.json')
      .then(response => {
        const isImage = response.data.url.includes('jpg') || response.data.url.includes('png')
        if(!isImage)
          onClickHandler()
        setData(response.data)
      })
      .catch(error => {
        console.error("error fetching data: ", error);
        setError(error)
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <div className="dog-containter">
      <Button onClick={onClickHandler} variant="contained">Buscar Cachorro</Button>
      {loading ? <p>Carregando...</p> : null}
      {!loading && data?.url ? <img id={data.url} src={data.url} alt="dog" /> : null}
    </div>
  )
}

export default DogPage