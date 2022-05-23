const PokemonUtil = {
  getColor: (types) => {
    if (types === undefined) {
      return "#4FC1A6";
    }

    switch (types.type.name) {
      case "fire":
        return "#F7786B";

      case "water":
        return "#77C4FE";

      case "poison":
        return "#7C538C";

      case "grass":
        return "#4FC1A6";

      case "electric":
        return "#FFCE4B";

      case "rock":
        return "#B1736C";

      case "dark":
        return "#565669";

      case "flying":
        return "#cdcde6";

      case "dragon":
        return "#f7af5a";

      case "bug":
        return "#92df68";

      case "ground":
        return "#be7447";

      case "psychic":
        return "#405483";

      case "fighting":
        return "#a2a29b";

      case "ghost":
        return "#9473b4";
      case "ice":
        return "#a4def6";

      default:
        return "#c5c5c5";
    }
  },

  getImagePokemon: (pokemon) => {
    if (pokemon.sprites === undefined) {
      return { uri: null };
    } else {
      return { uri: pokemon.sprites.front_default };
    }
  },

  getHeightPokemon: (height) => {
    let heightMeters = height / 10;
    let polegadas = heightMeters * 39.37;

    if (heightMeters >= 1) {
      return `${polegadas.toFixed(2)} (${heightMeters.toFixed(2)} m)`;
    } else {
      return `${polegadas.toFixed(2)} (${heightMeters.toFixed(2)} cm)`;
    }
  },

  getWeightPokemon: (weight) => {
    let lbs = weight / 4.536;
    let kg = lbs / 2.205;

    return `${lbs.toFixed(1)} lbs (${kg.toFixed(1)} kg)`;
  },

  getDescriptionPokemon: (flavor_text_entries) => {
    if (flavor_text_entries !== undefined && flavor_text_entries.length > 0) {
      let input = flavor_text_entries.find((input) => {
        return input.language.name === "en";
      });
      return input.flavor_text;
    }
  },
};

export default PokemonUtil;
