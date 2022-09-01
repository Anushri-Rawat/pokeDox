import React, { useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList, getSearchedPokemon } from "../Actions/PokemonAction";

const SearchBar = (props) => {
  const dispatch = useDispatch();
  const PokemonList = useSelector((state) => state.PokemonList);
  const searchInputRef = useRef();

  function searchHandler(e) {
    e.preventDefault();
    const query = searchInputRef.current.value.toLowerCase();
    console.log(query);
    if (query.trim() !== "") dispatch(getSearchedPokemon(query));
  }

  function clearInputHandler(e) {
    searchInputRef.current.value = "";
    dispatch(getPokemonList(PokemonList.perPage));
  }

  return (
    <form
      onSubmit={searchHandler}
      className={`search-bar ${props.class ? props.class : ""}`}
    >
      <input
        type="search"
        ref={searchInputRef}
        className="search-input-box"
        placeholder="Search the pokemon here..."
      ></input>
      <div className="search-buttons">
        <span style={{ fontSize: "20px" }} onClick={clearInputHandler}>
          x
        </span>
        <span>
          <i
            className="bi bi-search"
            style={{ fontSize: "14px", marginTop: "5px" }}
          ></i>
        </span>
      </div>
    </form>
  );
};

export default SearchBar;
