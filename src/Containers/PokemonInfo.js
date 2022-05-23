import React from "react";

const PokemonInfo = (props) => {
  return (
    <div className="row" style={{ marginBottom: "1.5rem" }}>
      <div className="trainingDiv">
        <h1>TRAINING</h1>
        <table>
          <tbody>
            <tr>
              <td className="row-heading pokiInfoHeading">EV Yield</td>
              <td className="row-value" style={{ color: props.bg_color }}></td>
            </tr>
            <tr>
              <td className="row-heading pokiInfoHeading">Catch rate</td>
              <td className="row-value" style={{ color: props.bg_color }}>
                {props.PokiInfo.capture_rate}
              </td>
            </tr>
            <tr>
              <td className="row-heading pokiInfoHeading">Base Friendship</td>
              <td className="row-value" style={{ color: props.bg_color }}>
                {props.PokiInfo.base_happiness}
              </td>
            </tr>
            <tr>
              <td className="row-heading pokiInfoHeading">Base Exp</td>
              <td className="row-value" style={{ color: props.bg_color }}></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="breedingDiv">
        <h1>Breeding</h1>
        <table>
          <tr>
            <td className="row-heading pokiInfoHeading">Egg Group</td>
            <td className="row-value">
              {props.PokiInfo.egg_groups.map((item) => {
                return (
                  <span
                    style={{
                      color: props.bg_color,
                      fontSize: `15px`,
                      padding: 0,
                      textTransform: "capitalize",
                    }}
                  >
                    {item.name}
                  </span>
                );
              })}
            </td>
          </tr>
          <tr>
            <td className="row-heading pokiInfoHeading">Egg Cycle</td>
            <td className="row-value" style={{ color: props.bg_color }}>
              {props.PokiInfo.hatch_counter}
            </td>
          </tr>
          <tr>
            <td className="row-heading pokiInfoHeading">Growth rate</td>
            <td className="row-value" style={{ color: props.bg_color }}>
              {props.PokiInfo.growth_rate.name}
            </td>
          </tr>
          <tr>
            <td className="row-heading pokiInfoHeading">Habitat</td>
            <td className="row-value" style={{ color: props.bg_color }}>
              {props.PokiInfo.habitat && props.PokiInfo.habitat.name}
            </td>
          </tr>
          <tr>
            <td className="row-heading pokiInfoHeading">Generation</td>
            <td className="row-value" style={{ color: props.bg_color }}>
              {props.PokiInfo.generation.name}
            </td>
          </tr>
        </table>
      </div>
      <div className="otherInfoDiv">
        <h1>Other Info</h1>
        <table>
          <tr>
            <td className="row-heading pokiInfoHeading">Forms</td>
            <td className="row-value">
              {props.PokiInfo.varieties.map((vari) => {
                return (
                  <span
                    style={{
                      color: props.bg_color,
                      fontSize: `15px`,
                      padding: 0,
                      textTransform: "capitalize",
                    }}
                  >
                    {vari.pokemon.name}
                  </span>
                );
              })}
            </td>
          </tr>
          <tr>
            <td className="row-heading pokiInfoHeading">Legendary</td>
            <td className="row-value" style={{ color: props.bg_color }}>
              {props.PokiInfo.is_legendary.toString()}
            </td>
          </tr>
          <tr>
            <td className="row-heading pokiInfoHeading">Mythical</td>
            <td className="row-value" style={{ color: props.bg_color }}>
              {props.PokiInfo.is_mythical.toString()}
            </td>
          </tr>
          <tr>
            <td className="row-heading pokiInfoHeading">Alt Forms</td>
            <td className="row-value" style={{ color: props.bg_color }}>
              {props.PokiInfo["forms_switchable"].toString()}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default PokemonInfo;
