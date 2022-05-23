import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonEvolutionChain } from "../Actions/PokemonAction";
import _ from "lodash";
import rightArrow from "../Assests/right-arrow.png";
import { Link } from "react-router-dom";
import PokemonInfo from "./PokemonInfo";

export const EvolutionChain = (props) => {
  const dispatch = useDispatch();
  const evolutionChainData = useSelector(
    (state) => state.PokemonEvolutionChain
  );
  useEffect(() => {
    dispatch(getPokemonEvolutionChain(props.id));
  }, []);
  let evoChain = [];

  function getEvo(arr) {
    if (arr[0].evolves_to.length > 0) {
      evoChain.push({
        species_name: arr[0].species.name,
        min_level: !arr[0].evolves_to[0].evolution_details[0]
          ? 1
          : arr[0].evolves_to[0].evolution_details[0].min_level,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${arr[0].species.url.slice(
          42,
          -1
        )}.png`,
      });
      getEvo(arr[0].evolves_to);
    } else {
      evoChain.push({
        species_name: arr[0].species.name,
        min_level: "abc",
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${arr[0].species.url.slice(
          42,
          -1
        )}.png`,
      });
      return 0;
    }
  }

  if (!_.isEmpty(evolutionChainData.data)) {
    getEvo([evolutionChainData.data.chain]);
    return (
      <div className="evolution_container">
        <h1 className="evolution_heading">
          <span style={{ background: props.bg_color }}> Evolution chain</span>
        </h1>
        <div className="row">
          {evoChain.map((evo, i) => {
            return (
              <Fragment key={i}>
                <div className="evoDiv">
                  <Link to={`/pokemon/${evo.species_name}`}>
                    <img src={evo.image} alternate="Pokemon image"></img>
                  </Link>
                  <div className="evoName">
                    <span style={{ background: props.bg_color }}>
                      {evo.species_name}
                    </span>
                  </div>
                </div>
                {evo.min_level != "abc" && (
                  <div className="evoArrow">
                    <img src={rightArrow} />
                    {evo.min_level && `Level ${evo.min_level}+`}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
        <PokemonInfo
          PokiInfo={evolutionChainData.data}
          bg_color={props.bg_color}
        />
      </div>
    );
  }
};

export default EvolutionChain;
