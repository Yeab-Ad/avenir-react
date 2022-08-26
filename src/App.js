/** @format */

import "./App.scss";
import React, { Component } from "react";
import { Dishes } from "./Components/Dishes";
import { Restaurant } from "./Components/Restaurant";
import { Nav } from "./Components/Nav";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [dishesToggle, setDishesToggler] = useState(false);
  const [ServerError, setServerError] = useState(false);
  const [dishes, setDishes] = useState([]);
  const [Restaurants, setRestaurants] = useState([]);
  const [Loading, setLoading] = useState(false);

  const apiURL =
    "https://staging.tikusdelivery.com/api/searchDishesAndRestaurants";

  const restaurantToggler = () => {
    if (dishesToggle) {
      setDishesToggler(false);
    }
  };

  const dishesToggler = () => {
    if (!dishesToggle) {
      setDishesToggler(true);
    }
  };
  const Style = (src) => ({
    backgroundImage: "url(" + src + ")",
  });

  let listsOfDish = [];
  let LoadingArray = [0, 2, 1, 3, 4, 2, 4];

  function getData(event) {
    console.log(event);
    setLoading(true);

    let form = new FormData();
    form.append("restaurantName", event);
    form.append("latitude", "9.003869");
    form.append("longitude", "38.780127");
    form.append("pageNumber", "1");

    axios
      .post(apiURL, form)
      .then((data) => {
        setLoading(false);

        setRestaurants(data.data.listRestaurants);

        setDishes([]);

        if (listsOfDish <= 0) {
          for (let i in data.data.listDishes) {
            for (let j in data.data.listDishes[i].dishesList) {
              return setDishes((oldArray) => [
                ...oldArray,
                data.data.listDishes[i].dishesList[j],
              ]);
            }
          }
        }
      })
      .catch((err) => {
        setServerError(true);
      });
  }

  useEffect(() => {
    setLoading(true);
    //set default value
    getData("burger");
  }, [1]);

  return (
    <div className="App">
      <Nav getData={getData}></Nav>
      <section>
        <div className="flex header">
          <h1>Restaurants results near you</h1>
          <div>
            {Restaurants?.length +
              " restaurant" +
              " , " +
              dishes?.length +
              " dishes"}
          </div>
        </div>
        <div className={"flex btn-cont "}>
          <button
            className={dishesToggle ? "selected" : ""}
            onClick={dishesToggler}>
            dishes
          </button>
          <button
            className={dishesToggle ? "" : "selected"}
            onClick={restaurantToggler}>
            restaurant
          </button>
        </div>

        <div className="cont">
          <h1> {ServerError ? "ServerError" : ""}</h1>
          {dishesToggle ? (
            <Dishes
              LoadingArray={LoadingArray}
              Loading={Loading}
              dishes={dishes}
              Style={Style}></Dishes>
          ) : (
            <Restaurant
              LoadingArray={LoadingArray}
              Loading={Loading}
              Restaurants={Restaurants}
              Style={Style}></Restaurant>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
