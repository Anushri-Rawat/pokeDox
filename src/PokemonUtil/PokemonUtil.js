let maxMaxStat = 1,
  maxMinStat = 1;
let output = {};
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
  calculateStats: (stats) => {
    let PokemonStats = [];
    for (let i = 0; i < 6; i++) {
      PokemonStats[i] = stats[i].base_stat;
    }
    return PokemonStats;
  },

  calculateMaxStats: (stats, id) => {
    let maxPokemonStats = [];
    if (id === 292) {
      // Shedinja HP
      maxPokemonStats[0] = 1;
    } else {
      maxPokemonStats[0] = Math.floor(
        ((2 * stats[0].base_stat + 31 + 63) * 100) / 100 + 100 + 10
      );
    }
    for (let i = 1; i < 6; i++) {
      maxPokemonStats[i] = Math.floor(
        Math.floor(((2 * stats[i].base_stat + 31 + 63) * 100) / 100 + 5) * 1.1
      );
    }
    maxMaxStat = Math.max(...maxPokemonStats);
    return maxPokemonStats;
  },

  calculateMinStats: (stats, id) => {
    let minPokemonStats = [];
    if (id === 292) {
      // Shedinja HP
      minPokemonStats[0] = 1;
    } else {
      minPokemonStats[0] = Math.floor(
        (2 * stats[0].base_stat * 100) / 100 + 100 + 10
      );
    }
    for (let i = 1; i < 6; i++) {
      minPokemonStats[i] = Math.floor(
        Math.floor((2 * stats[i].base_stat * 100) / 100 + 5) * 0.9
      );
    }
    maxMinStat = Math.max(...minPokemonStats);
    return minPokemonStats;
  },

  showStats: (type, stats, id, maxStat) => {
    switch (type) {
      case "base": {
        output = {
          stats: PokemonUtil.calculateStats(stats),
          maximumStat: maxStat,
          selectedStat: "base",
        };
        break;
      }
      case "max": {
        output = {
          stats: PokemonUtil.calculateMaxStats(stats, id),
          maximumStat: maxMaxStat,
          selectedStat: "max",
        };
        break;
      }
      case "min": {
        output = {
          stats: PokemonUtil.calculateMinStats(stats, id),
          maximumStat: maxMinStat,
          selectedStat: "min",
        };
        break;
      }
    }
    return output;
    // for (let i = 0; i < 6; i++) {
    //   let calculatedStat = Math.floor((stats[i] / maximumStat) * 100);
    //   if (calculatedStat > 10) {
    //     stats[i] = calculatedStat;
    //   } else {
    //     calculatedStat = 10;
    //     stats[i] = calculatedStat;
    //   }
    // }
  },
};

export default PokemonUtil;
