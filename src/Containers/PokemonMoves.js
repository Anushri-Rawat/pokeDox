import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Accordion from "react-bootstrap/Accordion";

export const PokemonMoves = (props) => {
  return (
    <div className="moves">
      <h2 style={{ paddingLeft: "15px" }}>MOVES:</h2>
      {props.moves.map((move, i) => {
        return (
          <Accordion key={i}>
            <Accordion.Header>{move.move.name}</Accordion.Header>
            <Accordion.Body>Lorem epsom</Accordion.Body>
          </Accordion>
        );
      })}
    </div>
  );
};

export default PokemonMoves;
