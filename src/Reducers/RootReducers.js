import { combineReducers } from "redux";
import PokemonEvolutionChainReducer from "./PokemonEvolutionChainReducer";
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonMultipleReducers";

export const RootReducers = combineReducers({
  PokemonList: PokemonListReducer,
  PokemonMultiple: PokemonMultipleReducer,
  PokemonEvolutionChain: PokemonEvolutionChainReducer,
});
export default RootReducers;
