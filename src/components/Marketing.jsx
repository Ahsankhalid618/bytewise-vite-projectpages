// eslint-disable-next-line no-unused-vars
import React from "react";
import market1 from "../assets/market1.png";
import market2 from "../assets/market2.png";
import market3 from "../assets/market3.png";
import { FaArrowRightLong } from "react-icons/fa6";

export const Marketing = () => {
  return (
    <div>
      <div className="px-36 py-10">
        <h1 className="text-center text-[#4D4D4D] font-semibold text-4xl">
          Caring is the new marketing
        </h1>
        <p className="text-sm text-[#717171] text-center w-[550px] m-auto my-2">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's more.​
        </p>

        <div className="flex gap-5 items-center mt-6">
          <div className="flex flex-col items-center">
            <img src={market1} alt="" />
            <div className="flex flex-col items-center gap-5 bg-[#F5F7FA] p-4 shadow-lg w-[260px] text-center -mt-20 rounded-lg">
              <p className="text-[#717171] text-base font-semibold">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <button className="flex items-center gap-2 text-[#4CAF4F] font-semibold">
                Readmore{" "}
                <i>
                  <FaArrowRightLong />
                </i>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={market2} alt="" />
            <div className="flex flex-col items-center gap-5 bg-[#F5F7FA] p-4 shadow-lg w-[260px] text-center -mt-20 rounded-lg">
              <p className="text-[#717171] text-base font-semibold">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <button className="flex items-center gap-2 text-[#4CAF4F] font-semibold">
                Readmore{" "}
                <i>
                  <FaArrowRightLong />
                </i>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={market3} alt="" />
            <div className="flex flex-col items-center gap-5 bg-[#F5F7FA] p-4 shadow-lg w-[260px] text-center -mt-20 rounded-lg">
              <p className="text-[#717171] text-base font-semibold">
                Revamping the Membership Model with Triathlon Australia
              </p>
              <button className="flex items-center gap-2 text-[#4CAF4F] font-semibold">
                Readmore{" "}
                <i>
                  <FaArrowRightLong />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F7FA] py-8 flex flex-col items-center">
        <h1 className="text-5xl font-semibold text-[#263238] w-[600px] text-center">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="primary-btn-medium mt-8 flex items-center">
          Get a Demo{" "}
          <i>
            <FaArrowRightLong />
          </i>
        </button>
      </div>
    </div>
  );
};
