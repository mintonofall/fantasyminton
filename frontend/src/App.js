import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios('http://localhost:4000')
    .then((res) => {
      console.log(res);
      setPlayers(res.data);
    });
  },[]);

  useEffect(() => {
      console.log(players);
  },[players]);

  return (
    <div className="App">
      {
        players.map((a) => {
          return(
            <div className='playerCard'>
              <div>{a.name}</div>
              <div>{a.contry}</div>
            </div>
          )
        })
      }
      

    </div>

  );
}

export default App;
