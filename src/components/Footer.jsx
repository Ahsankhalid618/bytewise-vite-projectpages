// eslint-disable-next-line no-unused-vars
import React from "react";
import logo2 from "../assets/logo2.svg";
import { LuInstagram } from "react-icons/lu";
import { CiBasketball } from "react-icons/ci";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

// A reusable component for social media icons
// eslint-disable-next-line react/prop-types
const SocialIcon = ({ Icon }) => (
  <i className="bg-[#38474d] p-2 rounded-full text-white text-lg">
    <Icon />
  </i>
);

const FooterSection = ({ title, items }) => (
  <div >
    <ul className="text-[#F5F7FA] text-sm flex flex-col gap-5">
      {title && (
        <li className="text-white font-semibold text-lg mb-5">{title}</li>
      )}
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <div className="bg-[#263238] py-16 px-36 flex justify-between">
      <div className="w-[40%]">
        <img src={logo2} alt="Company logo" />
        <div className="my-7 text-[#F5F7FA] text-sm">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className="flex items-center gap-5">
          <SocialIcon Icon={LuInstagram} />
          <SocialIcon Icon={CiBasketball} />
          <SocialIcon Icon={FaTwitter} />
          <SocialIcon Icon={FaYoutube} />
        </div>
      </div>
      <div className="w-[60%] grid grid-rows-1 grid-flow-col gap-16">
        <FooterSection
          title="Company"
          items={["About us", "Blog", "Contact us", "Pricing", "Testimonials"]}
        />
        <FooterSection
          title="Support"
          items={[
            "Help center",
            "Terms of service",
            "Legal",
            "Privacy policy",
            "Status",
          ]}
        />
        <div>
          <h1 className="text-white font-semibold text-lg mb-10">
            Stay up to date
          </h1>
          <div className="bg-[#4e5b61] flex items-center p-2 rounded-lg my-2">
            <input
              placeholder="Your email address"
              className="bg-transparent outline-none text-white placeholder:text-white"
            />
            <i className="text-white">
              <FiSend />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};
