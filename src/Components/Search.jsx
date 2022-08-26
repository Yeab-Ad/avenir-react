/** @format */

//   (change)=" "

import React from "react";

export const Search = ({ getData }) => {
  return (
    <div>
      <form>
        <div className="search cont">
          <input
            type="text"
            name="search"
            placeholder="Search for Music "
            defaultValue="burger"
            onChange={(event) => getData(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
