import React from "react";

const Card = props => {
  const { name, height, mass } = props.data;
  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Height: {height}</li>
        <li>Mass: {mass}</li>
      </ul>
    </div>
  );
};

export default Card;
