import { useEffect, useState } from 'react';
import './App.css';
import Card from "./componets/cards";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
       setUserData(data);
       console.log(data);
      })
  }, []);

  return (
    <>
    <h1>GITHUB USER APP</h1>
      <div className='card-container'>
        {
          userData.map((user) => {
            console.log(user.login)
            return (
              <Card
                userName={user.login}
                profilepic={user.avatar_url}
                profileUrl={user.html_url}
              />
            );
          })
        }
      </div>
    </>
  );
}

export default App;
