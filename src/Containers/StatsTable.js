import React from "react";
import PokemonUtil from "../PokemonUtil/PokemonUtil";
import _ from "lodash";

const StatsTable = ({
  FinalPokemonStatsData,
  setFinalPokemonStatsData,
  PokemonData,
  bg_color,
  maxStat,
}) => {
  return (
    <div className="stats">
      <div className="stats-type">
        <button
          className="active"
          style={{
            backgroundColor:
              FinalPokemonStatsData.selectedStat == "base" ? bg_color : "white",
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
                PokemonData.stats,
                PokemonData.id,
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
              FinalPokemonStatsData.selectedStat == "max" ? bg_color : "white",
          }}
          onClick={(e) => {
            e.target.classList.add("active");
            e.target.previousElementSibling.classList.remove("active");
            e.target.nextElementSibling.classList.remove("active");
            setFinalPokemonStatsData(
              PokemonUtil.showStats(
                "max",
                PokemonData.stats,
                PokemonData.id,
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
              FinalPokemonStatsData.selectedStat == "min" ? bg_color : "white",
          }}
          onClick={(e) => {
            e.target.classList.add("active");
            e.target.previousElementSibling.classList.remove("active");
            e.target.previousElementSibling.previousElementSibling.classList.remove(
              "active"
            );
            setFinalPokemonStatsData(
              PokemonUtil.showStats(
                "min",
                PokemonData.stats,
                PokemonData.id,
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
          {PokemonData.stats.map((stat, i) => (
            <tr key={i}>
              <td className="row-heading">{stat.stat.name}</td>
              <td className="row-value">
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      backgroundColor: bg_color,
                      width:
                        (!_.isEmpty(FinalPokemonStatsData.stats)
                          ? FinalPokemonStatsData.stats[i] /
                            FinalPokemonStatsData.maximumStat
                          : stat.base_stat / maxStat) *
                          100 +
                        "%",
                    }}
                  >
                    <span className="progress-value">
                      {!_.isEmpty(FinalPokemonStatsData.stats)
                        ? FinalPokemonStatsData.stats[i]
                        : stat.base_stat}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
