// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ imgsrc, title }) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
          <div className="card-body">
            <h2 className="card-title text-xl font-sans font-bold text-slate-500 ">
              {title}
            </h2>
            <p className="card-text text-justify">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink
              to="/"
              className="btn px-8 py-3 text-white rounded-md bg-[#45d449] hover:bg-[#4be751] text-sm font-medium  mt-4"
            >
              See more
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
