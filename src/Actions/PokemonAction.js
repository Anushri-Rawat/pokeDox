import axios from "axios";

function getPokemonInfo(arr) {
  const promises = arr.map(async (poke) => {
    let data = await axios.get(`${poke.url}`);
    return { ...poke, ...data.data };
  });
  return Promise.all(promises);
}

export const getPokemonList = (page) => async (dispatch) => {
  try {
    dispatch({ type: "POKEMON_LIST_LOADING" });
    const perPage = 100;
    const offset = page * perPage - perPage;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );
    const pokemonInfo = await getPokemonInfo(res.data.results);

    dispatch({
      type: "POKEMON_LIST_SUCCESS",
      payload: pokemonInfo,
      currPage: page,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
      msg: "unable to get pokemon",
    });
  }
};

export const getSearchedPokemon = (data) => async (dispatch) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`);
    dispatch({ type: "POKEMON_SEARCHING", payload: [res.data] });
  } catch (e) {
    dispatch({
      type: "POKEMON_LIST_FAIL",
      msg: "Sorry no such pokemon found....Please recheck the pokemon name!!",
    });
  }
};

export const getPokemonDetails = (pokemon) => async (dispatch) => {
  try {
    dispatch({ type: "POKEMON_MULTIPLE_LOADING" });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: "POKEMON_MULTIPLE_SUCCESS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_MULTIPLE_FAIL",
    });
  }
};
export const getPokemonEvolutionChain = (id) => async (dispatch) => {
  try {
    dispatch({ type: "POKEMON_EVOLUTION_LOADING" });

    const res = await axios.get(id);
    const data = await axios.get(res.data["evolution_chain"].url);

    dispatch({
      type: "POKEMON_EVOLUTIONCHAIN_SUCCESS",
      payload: { ...res.data, ...data.data },
    });
  } catch (e) {
    dispatch({
      type: "POKEMON_EVOLUTIONCHAIN_FAIL",
    });
  }
};
