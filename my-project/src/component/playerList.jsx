import React from "react";
import Player from "./player";
import players from "./players";

const PlayerList = () => {
  return (
    <div className="flex gap-4">
      {console.log(players)}
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;
