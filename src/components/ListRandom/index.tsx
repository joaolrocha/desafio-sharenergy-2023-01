import axios from "axios";
import { Fragment, useState } from "react";
import ButtonHome from "../ButtonHome";

const ListRandom = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const onClickHandler = () => {
    setActiveLink(0);
    setLoading(true);
    axios.get('https://randomuser.me/api/')
      .then((response) => {
        console.log(response.data.results);
        setUserData(response.data.results);
      }).catch((error) => {
        console.log(error);
        setLoading(true);
      }).finally(() => {
        setLoading(false);
        setActiveUser(true);
      })
  }

  const icons = [
    'fas fa-user fa-4x',
    'fas fa-envelope fa-4x',
    'fas fa-calendar-alt fa-4x',
    'fas fa-map-marker fa-4x',
    'fas fa-phone fa-4x',
    'fas fa-lock fa-4x',
  ];
  const activeLinkHandler = (index: any) => {
    setActiveLink(index);
  }

  const PhraseGenerator = ({ user }: any) => {
    const phrases = [
      `Hi my name is ${user.name.first} ${user.name.last}`,
      `My email address is ${user.email}`,
      `I was born on ${user.dob.date.slice(0, 10)} and my age is ${user.dob.age}`,
      `My country is ${user.location.country}`,
      `My phone number is ${user.phone}`,
      `My Username is ${user.login.username}`,
    ];
    return <h1>{phrases[activeLink]}</h1>
  }

  return (
    <div className="list-container">
      <div className="list-content-container">
        <h1>Get Random Users</h1>
      </div>
      <ButtonHome
        isActive={activeUser}
        clicked={onClickHandler} />
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="app__user">
          {userData.map((user: any, index) => {
            return (
              <Fragment key={user.cell}>
                <img src={user?.picture?.large} alt="#" />
                <PhraseGenerator user={user} />
                <div className="app__icons">
                  {icons.map((icon, index) => {
                    return (
                      <i
                        className={icon}
                        key={index}
                        onMouseEnter={() => activeLinkHandler(index)}
                      ></i>
                    )
                  })}
                </div>
              </Fragment>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ListRandom