const DefaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  serachResults: false,
};
const PokemonListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: action.msg,
      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        perPage: action.currPage,
        serachResults: false,
      };
    case "POKEMON_SEARCHING":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
        serachResults: true,
      };
    default:
      return state;
  }
};
export default PokemonListReducer;
