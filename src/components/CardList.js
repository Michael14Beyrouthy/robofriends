import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardArray = robots.map((user) => {
    //We add a unique "key" attribute to each component as good practice to help with the DOM manipulation in the backround
    return (
      <Card
        key={user.id}
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
      />
    );
  });
  return <div>{cardArray}</div>;
};

export default CardList;
