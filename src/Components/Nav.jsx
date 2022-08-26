/** @format */

import React, { Component } from "react";

export const Nav = () => {
  return (
    <div>
      <nav className="flex">
        <div className="logo"></div>

        <div className="search">
          <input
            type="text"
            placeholder="Search restaurant"
            name="search"
            id=""
          />
        </div>
        <a className="login">Login</a>
      </nav>
    </div>
  );
};
