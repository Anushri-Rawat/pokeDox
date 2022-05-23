import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../Actions/PokemonAction";
import _ from "lodash";
import PokemonCard from "./PokemonCard";
import { Link } from "react-router-dom";
import { Header } from "../Components/Header";

const PokemonList = (props) => {
  const dispatch = useDispatch();
  const PokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    dispatch(getPokemonList(PokemonList.perPage || 1));
  }, []);

  document.querySelector(".NextBtn") &&
    document.querySelector(".NextBtn").addEventListener("click", () => {
      dispatch(getPokemonList(PokemonList.perPage + 1));
    });
  document.querySelector(".Prevbtn") &&
    document.querySelector(".Prevbtn").addEventListener("click", () => {
      dispatch(getPokemonList(PokemonList.perPage - 1));
    });

  const ShowData = () => {
    if (PokemonList.loading) {
      return <p>Loading...</p>;
    }

    if (!_.isEmpty(PokemonList.data)) {
      return (
        <div className="PokemonList">
          {PokemonList.data.map((item, i) => (
            <Link to={`/pokemon/${item.name}`} key={i}>
              <PokemonCard pokemon={item} />
            </Link>
          ))}
          {PokemonList.data.length > 20 && (
            <div className="btnDiv">
              {PokemonList.perPage != 1 && (
                <div className="btn Prevbtn">Prev</div>
              )}
              <div className="btn NextBtn">Next</div>
            </div>
          )}
        </div>
      );
    }

    if (PokemonList.errorMsg !== "") return <p>{PokemonList.errorMsg}</p>;
  };
  return <div>{ShowData()}</div>;
};
export default PokemonList;
