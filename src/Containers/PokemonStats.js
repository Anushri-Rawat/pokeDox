import React, { Fragment } from "react";
import _ from "lodash";

export const PokemonStats = (props) => {
  return (
    <Fragment>
      {props.PokemonData.map((stat, i) => (
        <tr key={i}>
          <td className="row-heading">{stat.stat.name}</td>
          <td className="row-value">
            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  backgroundColor: props.bg_color,
                  width:
                    (!_.isEmpty(props.pokiVal.stats)
                      ? props.pokiVal.stats[i] / props.pokiVal.maximumStat
                      : stat.base_stat / props.maxStat) *
                      100 +
                    "%",
                }}
              >
                <span className="progress-value">
                  {!_.isEmpty(props.pokiVal.stats)
                    ? props.pokiVal.stats[i]
                    : stat.base_stat}
                </span>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </Fragment>
    // {props.PokemonData.stats.map((stat, i) => (
    //   <tr>
    //     <td className="row-heading">{stat.stat.name}</td>
    //     <td className="row-value">
    //       <div className="progress">
    //         <div
    //           className="progress-bar"
    //           style={{
    //             backgroundColor: props.bg_color,
    //             width: (maxPokemonStats[i] / maxMaxStats) * 100,
    //           }}
    //         >
    //           <span className="progress-value">
    //             {maxPokemonStats[i]}
    //           </span>
    //         </div>
    //       </div>
    //     </td>
    //   </tr>
    // ))}
    // {props.PokemonData.stats.map((stat, i) => (
    //   <tr>
    //     <td className="row-heading">{stat.stat.name}</td>
    //     <td className="row-value">
    //       <div className="progress">
    //         <div
    //           className="progress-bar"
    //           style={{
    //             backgroundColor: props.bg_color,
    //             width: (minPokemonStats[i] / maxMinStats) * 100,
    //           }}
    //         >
    //           <span className="progress-value">
    //             {minPokemonStats[i]}
    //           </span>
    //         </div>
    //       </div>
    //     </td>
    //   </tr>
    // ))}
  );
};
export default PokemonStats;
