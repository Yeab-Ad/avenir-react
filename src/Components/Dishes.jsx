/** @format */
import React, { Component } from "react";

export const Dishes = ({ dishes, Style, LoadingArray, Loading }) => {
  return (
    <section className="">
      <div className="dish-cont grid">
        {dishes.map((dishe) => (
          <div key={dishe.id} className="items flex">
            <div style={Style(dishe.image)} className="image"></div>
            <div className="flex contents">
              <div className="grid item-disc">
                <div className="name">{dishe.name}</div>
                <div className="price">{dishe.price}</div>
              </div>
              <button>
                {dishe.isAvailable == "true" ? "ADD" : "Not Available"}
              </button>
            </div>
          </div>
        ))}
        {Loading
          ? LoadingArray.map((dishe, index) => (
              <div key={index} className="items flex">
                <div className="skeleton image"></div>
                <div className="flex contents">
                  <div className="grid item-disc">
                    <div className="name skeleton">n</div>
                    <div className="price skeleton">n</div>
                  </div>
                  <button id="skeleton" className="button">
                    button ___
                  </button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </section>
  );
};
