import React from "react";
import { Header } from "../Components/Header";
import PokemonList from "./PokemonList";
import { useState } from "react";

export const HomePage = (props) => {
  return (
    <div className="App">
      <Header />
      <PokemonList />
    </div>
  );
};
export default HomePage;
