import React, { Fragment } from "react";
import logo from "../Assests/R.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import SearchBar from "./SearchBar";

export const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="Pokedox" />
        </div>
        <div className="right-header-section">
          <SearchBar />
        </div>
      </div>
      <SearchBar class={"activeSearch"} />
    </Fragment>
  );
};
