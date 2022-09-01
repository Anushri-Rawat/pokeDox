import React, { Fragment, useState } from "react";
import _ from "lodash";
import PokemonUtil from "../PokemonUtil/PokemonUtil";
import StatsTable from "./StatsTable";

export const PokemonStats = ({ bg_color, PokemonData }) => {
  let maxStat = 0;
  const [FinalPokemonStatsData, setFinalPokemonStatsData] = useState({
    stats: [],
    maximumStat: 1,
    selectedStat: "base",
  });

  PokemonData.stats.map((stat) => {
    maxStat = Math.max(maxStat, stat.base_stat);
  });

  return (
    <Fragment>
      <div className="pokemon-details-name">{PokemonData.name}</div>
      <div className="pokemon_details_row">
        <div className="about_form">
          <table>
            <tbody>
              <tr>
                <td className="row-heading">ID</td>
                <td className="row-value">#{PokemonData.order}</td>
              </tr>
              <tr>
                <td className="row-heading">Height</td>
                <td className="row-value">
                  {PokemonUtil.getHeightPokemon(PokemonData.height)}
                </td>
              </tr>
              <tr>
                <td className="row-heading">Weight</td>
                <td className="row-value">
                  {PokemonUtil.getWeightPokemon(PokemonData.weight)}
                </td>
              </tr>
              <tr>
                <td className="row-heading">Types</td>
                <td className="row-value poke-types">
                  {PokemonData.types.map((type, i) => (
                    <div
                      className="poke-type-style"
                      style={{
                        backgroundColor: PokemonUtil.getColor(type),
                        textTransform: "capitalize",
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
                  {PokemonData.abilities.map((ability, i) => (
                    <span
                      style={{
                        backgroundColor: bg_color,
                        textTransform: "capitalize",
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
                  {PokemonData.forms.map((form) => (
                    <span
                      style={{
                        backgroundColor: bg_color,
                        textTransform: "capitalize",
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
            src={PokemonData.sprites.other["official-artwork"].front_default}
            alt="pokemon"
          />
        </div>
        <StatsTable
          FinalPokemonStatsData={FinalPokemonStatsData}
          setFinalPokemonStatsData={setFinalPokemonStatsData}
          PokemonData={PokemonData}
          bg_color={bg_color}
          maxStat={maxStat}
        />
      </div>
    </Fragment>
  );
};
export default PokemonStats;
