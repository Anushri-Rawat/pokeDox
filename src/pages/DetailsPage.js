import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetails } from "../Actions/PokemonAction";
import { useParams } from "react-router-dom";
import logo from "../Assests/R.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import PokemonUtil from "../PokemonUtil/PokemonUtil";
import PokemonStats from "../Containers/PokemonStats";
import EvolutionChain from "../Containers/EvolutionChain";
import PokemonMoves from "../Containers/PokemonMoves";
import Loader from "../Components/Loader";
import PokemonInfo from "../Containers/PokemonInfo";

const DetailsPage = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const PokemonData = useSelector((state) => state.PokemonMultiple);

  useEffect(() => {
    dispatch(getPokemonDetails(params.pokemon));
  }, [params.pokemon]);

  const ShowData = () => {
    if (PokemonData.loading) {
      return <Loader />;
    }

    if (!_.isEmpty(PokemonData.data)) {
      let bg_color = PokemonUtil.getColor(PokemonData.data.types[0]);

      return (
        <div className="detailsPage">
          <div
            className="Pokemon_details_header"
            style={{
              backgroundColor: bg_color,
            }}
          >
            <Link to="/">
              <i className="bi bi-arrow-left"></i>
            </Link>
            <div className="header-logo">
              <img src={logo} alt="Pokedox" />
            </div>
          </div>
          <div className="pokemon_details_body">
            <PokemonStats bg_color={bg_color} PokemonData={PokemonData.data} />

            <EvolutionChain
              id={PokemonData.data.species.url}
              bg_color={bg_color}
            />

            <div className="moves">
              <h2 style={{ width: "100%" }}>MOVES:</h2>
              {PokemonData.data.moves.map((move, i) => (
                <PokemonMoves move={move} bg_color={bg_color} key={i} />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (PokemonData.errorMsg !== "") return <p>{PokemonData.errorMsg}</p>;
  };

  return ShowData();
};
export default DetailsPage;
