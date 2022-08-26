/** @format */
import React, { Component } from "react";

export const Restaurant = ({ Restaurants, Style, LoadingArray, Loading }) => {
  return (
    <section className="">
      <div className="restaurants-cont flex">
        {Restaurants.map((Restaurant) => (
          <div key={Restaurant.restaurantId} className="items">
            <div
              style={Style(Restaurant.restaurantImage)}
              className="image"></div>
            <div className="cont grid">
              <div
                className={
                  "isOpen " +
                  (Restaurant.isOpen === "true" ? "" : "Display_none")
                }>
                Open
              </div>
              <div className="rating"> {Restaurant.averageReview}</div>
              <h1>{Restaurant.restaurantName} </h1>
              <p>{Restaurant.cuisines?.replaceAll(".", "    ")}</p>
              <h3>{Restaurant.displayTime}</h3>
            </div>
          </div>
        ))}

        {Loading
          ? LoadingArray.map((Restaurant, index) => (
              <div key={index} className="items">
                <div className="skeleton image"></div>
                <div className="cont grid">
                  <div className={"isOpen skeleton"}>Open</div>
                  <div className="skeleton rating"> hi</div>
                  <h1 className="skeleton">hi </h1>
                  <p className="skeleton">hi</p>
                  <h3 className="skeleton">hi</h3>
                </div>
              </div>
            ))
          : ""}
      </div>
    </section>
  );
};
