// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";

const Common = ({ name, imgsrc, isCompName, compName, visit, btnname }) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="text-4xl font-semibold text-[#4D4D4D]">
                    {name}
                    {isCompName}
                  </h1>
                  <h2 className="my-3 text-justify text-[#717171] text-sm font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio cupiditate iste doloribus, sit quaerat consequatur consectetur repudiandae sunt perferendis dicta debitis animi, at pariatur, veniam assumenda sint. Doloremque repellat explicabo deleniti sit libero ut quidem fuga enim cupiditate, voluptas,ejudh accusantium aperiam quaerat, eos consectetur error. Nihil delectus tenetur fdsfsint aballaboriosam nemo voluptatibus.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={visit} className="px-8 py-3 text-white rounded-md bg-[#45d449] hover:bg-[#4be751] text-sm font-medium">
                      {btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-image">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="Home Img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
