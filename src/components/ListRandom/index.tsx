import { useState } from "react";
import ButtonHome from "../ButtonHome";

const ListRandom = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  
  const onClickHandler = () => {
    console.log("button is working")

  }

  return (
    <div className="list-container">
      <div className="list-content-container">
        <h1>Get Random Users</h1>
      </div>
      <ButtonHome
        isActive={activeUser}
        clicked={onClickHandler} />
    </div>

  )
}

export default ListRandom