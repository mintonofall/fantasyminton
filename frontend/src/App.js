import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [players, setPlayers] = useState([]);
  const [menSingleList, setMenSingleList] = useState([]);
  const [womenSingleList, setWomenSingleList] = useState([]);
  const [menDoubleList, setMenDoubleList] = useState([]);
  const [womenDoubleList, setwomenDoubleList] = useState([]);
  const [mixDoubleList, setMixDoubleList] = useState([]);

  useEffect(() => {
    axios("http://localhost:4000").then((res) => {
      console.log(res);
      setPlayers(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(players);
    const menSingleArray = players.filter((player) => player.index === "MS");
    const womenSingleArray = players.filter((player) => player.index === "WS");
    const menDoubleArray = players.filter((player) => player.index === "MD");
    const womenDoubleArray = players.filter((player) => player.index === "WD");
    const mixDoubleArray = players.filter((player) => player.index === "XD");
    setMenSingleList(menSingleArray);
    setWomenSingleList(womenSingleArray);
    setMenDoubleList(menDoubleArray);
    setwomenDoubleList(womenDoubleArray);
    setMixDoubleList(mixDoubleArray);
  }, [players]);

  return (
    <div className="App">
      <div className="teamList">
        <div className="teamCard teamOne">
          <h5 className="teamName">방대표팀</h5>
          <h6 className="players"> MS : <img src="/contryFlagIcon/DK.png" /> 악셀센</h6>
        </div>
        <div className="teamCard teamTwo">
          {/* <h5 className="teamName">모팀장팀</h5>
          <h6 className="teamPlayers"> MS : {menSingleList[1].name}</h6>
          <h6 className="teamPlayers"> WS : {womenSingleList[1].name}</h6>
          <h6 className="teamPlayers"> MD : {menDoubleList[1].name}</h6>
          <h6 className="teamPlayers"> WD : {womenDoubleList[1].name}</h6>
          <h6 className="teamPlayers"> XD : {mixDoubleList[1].name}</h6> */}

        </div>
        <div className="teamCard teamThree">
          {/* <h5 className="teamName">지금을살자팀</h5>
          <h6 className="teamPlayers"> MS : {menSingleList[2].name}</h6>
          <h6 className="teamPlayers"> WS : {womenSingleList[2].name}</h6>
          <h6 className="teamPlayers"> MD : {menDoubleList[2].name}</h6>
          <h6 className="teamPlayers"> WD : {womenDoubleList[2].name}</h6>
          <h6 className="teamPlayers"> XD : {mixDoubleList[2].name}</h6> */}

        </div>
        <div className="teamCard teamFour">
          {/* <h5 className="teamName">초초수팀</h5>
          <h6 className="teamPlayers"> MS : {menSingleList[3].name}</h6>
          <h6 className="teamPlayers"> WS : {womenSingleList[3].name}</h6>
          <h6 className="teamPlayers"> MD : {menDoubleList[3].name}</h6>
          <h6 className="teamPlayers"> WD : {womenDoubleList[3].name}</h6>
          <h6 className="teamPlayers"> XD : {mixDoubleList[3].name}</h6> */}

        </div>
      </div>
      <div className="playerList">
        <div className="indexCard MS">
          {menSingleList.map((a) => {
            return (
              <div className="playerCard">
                <div className="playerIndex">{a.index}</div>
                <div className="playerContry">{a.contry}</div>
                <div className="playerName">{a.name}</div>
              </div>
            );
          })}
        </div>
        <div className="indexCard WS">
          {womenSingleList.map((a) => {
            return (
              <div className="playerCard">
                <div className="playerIndex">{a.index}</div>
                <div className="playerContry">{a.contry}</div>
                <div className="playerName">{a.name}</div>
              </div>
            );
          })}
        </div>
        <div className="indexCard MD">
          {menDoubleList.map((a) => {
            return (
              <div className="playerCard">
                <div className="playerIndex">{a.index}</div>
                <div className="playerContry">{a.contry}</div>
                <div className="playerName">{a.name}</div>
              </div>
            );
          })}
        </div>
        <div className="indexCard WD">
          {womenDoubleList.map((a) => {
            return (
              <div className="playerCard">
                <div className="playerIndex">{a.index}</div>
                <div className="playerContry">{a.contry}</div>
                <div className="playerName">{a.name}</div>
              </div>
            );
          })}
        </div>
        <div className="indexCard XD">
          {mixDoubleList.map((a) => (
            <div className="playerCard">
              <div className="playerIndex">{a.index}</div>
              <div className="playerContry">{a.contry}</div>
              <div className="playerName">{a.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
