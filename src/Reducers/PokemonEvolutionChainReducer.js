const DefaultState = {
  loading: false,
  data: [],
  errMsg: "",
};
const PokemonEvolutionChainReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_EVOLUTIONCHAIN_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "POKEMON_EVOLUTIONCHAIN_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get pokemon evolution chain",
      };
    case "POKEMON_EVOLUTIONCHAIN_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};
export default PokemonEvolutionChainReducer;
