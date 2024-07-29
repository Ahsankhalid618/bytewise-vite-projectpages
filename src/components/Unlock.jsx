/* eslint-disable no-unused-vars */
import React from "react";
import unlockPhoto from "../assets/unlock-img.svg";
import unlock2 from "../assets/unlock2.png";
import tesla from "../assets/tesla.png";
import logo from "../assets/company/Logo.png";
import logo1 from "../assets/company/Logo-1.png";
import logo2 from "../assets/company/Logo-2.png";
import logo3 from "../assets/company/Logo-3.png";
import logo4 from "../assets/company/Logo-4.png";
import logo5 from "../assets/company/Logo-5.png";
import { LuUsers2 } from "react-icons/lu";
import { PiHandshake } from "react-icons/pi";
import { TbHandClick } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

export const Unlock = () => {
  return (
    <>
      <div className="px-36">
        <div className="flex items-center justify-between gap-10">
          <div className="w-[42%]">
            <img className="w-full" src={unlockPhoto} alt="" />
          </div>
          <div className="w-[58%]">
            <div className="w-[90%]">
              <h1 className="text-4xl font-semibold text-[#4D4D4D]">
                The unseen of spending three years at Pixelgrade
              </h1>
              <p className="mt-4 text-[#717171] text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
            </div>
            <button className="px-8 py-3 text-white mt-8 bg-[#3bb63f]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F7FA] px-36 py-14">
        <div className="flex items-center justify-between">
          <div className="w-[55%]">
            <div>
              <h1 className="text-4xl text-[#4D4D4D] font-semibold">
                Helping a local
              </h1>
              <h1 className="text-4xl text-[#3bb63f] font-semibold">
                business reinvent itself
              </h1>
            </div>
            <p className="text-sm mt-2">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="w-[45%] grid grid-rows-2 grid-flow-col gap-10">
            <div className="flex items-center gap-5">
              <i className="text-4xl text-[#4CAF4F]">
                <LuUsers2 />
              </i>
              <div>
                <h3 className="text-2xl font-bold text-[#4D4D4D]">2,245,341</h3>
                <p className="text-[#717171] text-sm">Members</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <i className="text-4xl text-[#4CAF4F]">
                <TbHandClick />
              </i>
              <div>
                <h3 className="text-2xl font-bold text-[#4D4D4D]">828,867</h3>
                <p className="text-[#717171] text-sm">Event Bookings</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <i className="text-4xl text-[#4CAF4F]">
                <PiHandshake />
              </i>
              <div>
                <h3 className="text-2xl font-bold text-[#4D4D4D]">46,328</h3>
                <p className="text-[#717171] text-sm">Clubs</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <i className="text-4xl text-[#4CAF4F]">
                <MdPayment />
              </i>
              <div>
                <h3 className="text-2xl font-bold text-[#4D4D4D]">1,926,436</h3>
                <p className="text-[#717171] text-sm">Payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-36 py-10">
        <div className="flex items-center justify-between gap-10">
          <div className="w-[40%]">
            <img className="w-[85%]" src={unlock2} alt="" />
          </div>
          <div className="w-[58%]">
            <div className="w-[90%]">
              <h1 className="text-4xl font-semibold text-[#4D4D4D]">
                How to design your site footer like we did
              </h1>
              <p className="mt-4 text-[#717171] text-sm font-normal">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <button className="px-8 py-3 text-white mt-8 bg-[#3bb63f]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F7FA]">
        <div className="px-36 py-10">
          <div className="flex items-start justify-between gap-10">
            <div className="w-[30%]">
              <img className="w-[85%]" src={tesla} alt="" />
            </div>
            <div className="w-[70%]">
              <p className="text-[#717171] text-sm font-medium w-[90%]">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h4 className="text-[#3bb63f] font-semibold my-2">Tim Smith</h4>
              <p className="text-[#89939E] text-sm">
                British Dragon Boat Racing Association
              </p>
              <div className="flex items-center gap-9 my-5">
                <img src={logo} alt="" />
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <div className="flex items-center gap-2 text-[#3bb63f] font-semibold">
                  <button>Meet all customers</button>
                  <i>
                    <FaArrowRightLong />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
