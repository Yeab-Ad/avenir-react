/** @format */

import React, { Component } from "react";
import { Search } from "./Search";

export const Nav = ({ getData }) => {
  return (
    <div>
      <nav className="flex">
        <div className="logo"></div>

        <Search getData={getData}></Search>
        <a className="login">Login</a>
      </nav>
    </div>
  );
};
