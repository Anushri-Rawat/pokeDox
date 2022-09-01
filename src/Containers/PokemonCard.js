import React from "react";
import PokemonUtil from "../PokemonUtil/PokemonUtil";

const PokemonCard = (props) => {
  let bg_color = PokemonUtil.getColor(props.pokemon.types[0]);
  return (
    <div className="PokemonCard" style={{ backgroundColor: bg_color }}>
      <div className="card-header">
        <p className="pokemon-name">{props.pokemon.name}</p>
        <div className="pokeOwned">
          <div>
            # <span>{props.pokemon.order}</span>
          </div>
        </div>
      </div>
      <img
        className="pokeImage"
        src={props.pokemon.sprites.other["official-artwork"].front_default}
        alt="pokemon"
      />
      <div className="pokeTypes">
        {props.pokemon.types.map((type, i) => {
          return (
            <div className="pokeSkill" key={i}>
              {type.type.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
