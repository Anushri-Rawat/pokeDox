import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList, getSearchedPokemon } from "../Actions/PokemonAction";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const PokemonList = useSelector((state) => state.PokemonList);
  const debounce = (func) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, 500);
    };
  };

  const serachInputHandler = async (e) => {
    if (e.target.value.trim().length > 0) {
      dispatch(getSearchedPokemon(e.target.value));
    } else {
      dispatch(getPokemonList(PokemonList.perPage));
    }
  };

  const optimisedFn = debounce(serachInputHandler);

  return (
    <div className={`search-bar ${props.class ? props.class : ""}`}>
      <input
        type="text"
        className="search-input-box"
        placeholder="search the pokemon here..."
        onChange={optimisedFn}
      ></input>
      <i
        className="bi bi-search"
        style={{
          position: "absolute",
          right: "15px",
        }}
      ></i>
    </div>
  );
};

export default SearchBar;
