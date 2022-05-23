import React, { Fragment, useState } from "react";
import logo from "../Assests/R.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AiFillHeart } from "react-icons/ai";
import "../App.css";
import SearchBar from "./SearchBar";

export const Header = () => {
  const [lightTheme, SetLightTheme] = useState(true);

  return (
    <Fragment>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="Pokedox" />
          <SearchBar />
        </div>

        <div className="right-header-section">
          <div
            className="theme"
            onClick={() => {
              SetLightTheme((prev) => !prev);
              // if (lightTheme) {
              //   document.querySelector("body").classList.add("dark-theme");
              //   document.querySelector("body").classList.remove("light-theme");
              // } else {
              //   document.querySelector("body").classList.add("light-theme");
              //   document.querySelector("body").classList.remove("dark-theme");
              // }
            }}
          >
            {lightTheme ? (
              <i className="bi bi-moon-fill" style={{ color: "white" }}></i>
            ) : (
              <i className="bi bi-sun-fill" style={{ color: "black" }}></i>
            )}{" "}
            {lightTheme ? "Dark" : "Light"}
          </div>
          {/* <div className="favourites-container">
          <AiFillHeart style={{ fontSize: "19px" }} />
          <div className="count">1</div>
        </div> */}
        </div>
      </div>
      <SearchBar class={"activeSearch"} />
    </Fragment>
  );
};
