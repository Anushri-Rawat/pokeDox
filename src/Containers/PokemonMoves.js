import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export const PokemonMoves = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div
      className="move-block"
      style={{
        backgroundColor: isHovering ? props.bg_color : "rgba(0, 0, 0, 0.1)",
        color: isHovering ? "white" : "black",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.move.move.name.replace("-", " ")}
    </div>
  );
};

export default PokemonMoves;
