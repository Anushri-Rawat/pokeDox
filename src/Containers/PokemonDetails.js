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
import PokemonStats from "./PokemonStats";
import EvolutionChain from "./EvolutionChain";
import PokemonMoves from "./PokemonMoves";

export const PokemonDetails = (props) => {
  let maxStat = 0;

  const params = useParams();
  const dispatch = useDispatch();
  const PokemonData = useSelector((state) => state.PokemonMultiple);

  const [FinalPokemonStatsData, setFinalPokemonStatsData] = useState({
    stats: [],
    maximumStat: 1,
    selectedStat: "base",
  });

  useEffect(() => {
    dispatch(getPokemonDetails(params.pokemon));
  }, [params.pokemon]);

  const ShowData = () => {
    if (PokemonData.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(PokemonData.data)) {
      let bg_color = PokemonUtil.getColor(PokemonData.data.types[0]);
      PokemonData.data.stats.map((stat) => {
        maxStat = Math.max(maxStat, stat.base_stat);
      });

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
            <div className="pokemon-details-name">{PokemonData.data.name}</div>
            <div className="pokemon_details_row">
              <div className="about_form">
                <table>
                  <tbody>
                    <tr>
                      <td className="row-heading">ID</td>
                      <td className="row-value">#{PokemonData.data.order}</td>
                    </tr>
                    <tr>
                      <td className="row-heading">Height</td>
                      <td className="row-value">
                        {PokemonUtil.getHeightPokemon(PokemonData.data.height)}
                      </td>
                    </tr>
                    <tr>
                      <td className="row-heading">Weight</td>
                      <td className="row-value">
                        {PokemonUtil.getWeightPokemon(PokemonData.data.weight)}
                      </td>
                    </tr>
                    <tr>
                      <td className="row-heading">Types</td>
                      <td className="row-value poke-types">
                        {PokemonData.data.types.map((type, i) => (
                          <div
                            className="poke-type-style"
                            style={{
                              backgroundColor: PokemonUtil.getColor(type),
                            }}
                            key={type.type.name + i}
                          >
                            {type.type.name}
                          </div>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td className="row-heading">Abilities</td>
                      <td className="row-value">
                        {PokemonData.data.abilities.map((ability, i) => (
                          <span
                            style={{
                              backgroundColor: bg_color,
                            }}
                            key={i}
                          >
                            {ability.ability.name}
                          </span>
                        ))}
                      </td>
                    </tr>
                    <tr>
                      <td className="row-heading">Forms</td>
                      <td className="row-value">
                        {PokemonData.data.forms.map((form) => (
                          <span
                            style={{
                              backgroundColor: bg_color,
                            }}
                            key={Math.random()}
                          >
                            {form.name}
                          </span>
                        ))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="Pokemon_image">
                <img
                  src={
                    PokemonData.data.sprites.other["official-artwork"]
                      .front_default
                  }
                  alt="pokemon"
                />
              </div>
              <div className="stats">
                <div className="stats-type">
                  <button
                    className="active"
                    style={{
                      backgroundColor:
                        FinalPokemonStatsData.selectedStat == "base"
                          ? bg_color
                          : "white",
                    }}
                    onClick={(e) => {
                      e.target.classList.add("active");
                      e.target.nextElementSibling.classList.remove("active");
                      e.target.nextElementSibling.nextElementSibling.classList.remove(
                        "active"
                      );
                      setFinalPokemonStatsData(
                        PokemonUtil.showStats(
                          "base",
                          PokemonData.data.stats,
                          PokemonData.data.id,
                          maxStat
                        )
                      );
                    }}
                  >
                    Base
                  </button>
                  <button
                    style={{
                      backgroundColor:
                        FinalPokemonStatsData.selectedStat == "max"
                          ? bg_color
                          : "white",
                    }}
                    onClick={(e) => {
                      e.target.classList.add("active");
                      e.target.previousElementSibling.classList.remove(
                        "active"
                      );
                      e.target.nextElementSibling.classList.remove("active");
                      setFinalPokemonStatsData(
                        PokemonUtil.showStats(
                          "max",
                          PokemonData.data.stats,
                          PokemonData.data.id,
                          maxStat
                        )
                      );
                    }}
                  >
                    Max
                  </button>
                  <button
                    style={{
                      backgroundColor:
                        FinalPokemonStatsData.selectedStat == "min"
                          ? bg_color
                          : "white",
                    }}
                    onClick={(e) => {
                      e.target.classList.add("active");
                      e.target.previousElementSibling.classList.remove(
                        "active"
                      );
                      e.target.previousElementSibling.previousElementSibling.classList.remove(
                        "active"
                      );
                      setFinalPokemonStatsData(
                        PokemonUtil.showStats(
                          "min",
                          PokemonData.data.stats,
                          PokemonData.data.id,
                          maxStat
                        )
                      );
                    }}
                  >
                    Min
                  </button>
                </div>
                <table>
                  <tbody>
                    {
                      <PokemonStats
                        bg_color={bg_color}
                        PokemonData={PokemonData.data.stats}
                        pokiVal={FinalPokemonStatsData}
                        key={PokemonData.data.id}
                        maxStat={maxStat}
                      />
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <EvolutionChain
              id={PokemonData.data.species.url}
              bg_color={bg_color}
            />
            <PokemonMoves moves={PokemonData.data.moves} />
          </div>
        </div>
      );
    }

    if (PokemonData.errorMsg !== "") return <p>{PokemonData.errorMsg}</p>;
  };

  return ShowData();
};
