import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  let [players, setPlayers] = useState();
  const [isLoading, setLoad] = useState(false);
  const getPlayer = async () => {
      await axios('http://localhost:4000/')
      .then((players) => {
        setPlayers(players.data);
      })
  };
  if(isLoading){
  }
  else{
    getPlayer();
  }


  return (
    <div className="App">
      {
        players.map((player)=> {
          return(
          <p>{player.name}</p>
          )
        })
      }
    </div>

  );
}

export default App;
