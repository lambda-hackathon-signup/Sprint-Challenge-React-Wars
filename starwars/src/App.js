import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../src/components/Card";
import "./App.css";

const App = () => {
  // const Container =  styled.div`
  //   max-widt
  // `;

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(res => setData(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data &&
        data.map(character => (
          <Card key={character.created} data={character} />
        ))}
    </div>
  );
};

export default App;
