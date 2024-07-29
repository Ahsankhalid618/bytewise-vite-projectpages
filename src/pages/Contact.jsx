// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import swal from "sweetalert";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    msg: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmitHandle = (e) => {
    e.preventDefault();
    // message can be saved to db or email can be sent from here!

    swal("Sent!", "Message Sent Successfully!", "success");
  };

  return (
    <>
      <div className="mt-5 mb-7">
        <h1 className="text-center font-bold text-slate-500 text-3xl">
          Contact Us
        </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitHandle}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label font-bold text-slate-500"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control outline-none border-lime-500"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label font-bold text-slate-500"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control outline-none border-lime-500"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label font-bold text-slate-500"
                >
                  Your Message
                </label>
                <textarea
                  className="form-control outline-none border-lime-500"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
                <div className="col-12">
                  <button
                    className="btn px-4 py-3 text-white rounded-md bg-[#45d449] hover:bg-[#4be751] text-sm font-medium mt-3"
                    type="submit"
                  >
                    Submit form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
