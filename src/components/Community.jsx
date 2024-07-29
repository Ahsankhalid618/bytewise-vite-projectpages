// eslint-disable-next-line no-unused-vars
import React from "react";
import icon1 from "../assets/community/Icon1.svg";
import icon2 from "../assets/community/Icon2.svg";
import icon3 from "../assets/community/Icon3.svg";

// eslint-disable-next-line react/prop-types
const Card = ({ icon, title, description }) => (
  <div className="py-6 px-8 w-[307px] shadow-[0px_2px_4px_0px_rgba(171,190,209,0.20)] rounded-lg">
    <div>
      <div className="relative text-center">
        <img className="inline-block" src={icon} alt={title} />
        <span className="-z-10 absolute top-0 right-20 w-[50px] h-[49px] bg-[#cae9cc] rounded-tl-[18px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[18px]"></span>
      </div>
      <h3 className="text-[#4D4D4D] font-bold text-[1.75rem] leading-9 text-center">
        {title}
      </h3>
    </div>
    <p className="text-[#717171] text-sm font-normal text-center">
      {description}
    </p>
  </div>
);

export const Community = () => {
  const cardData = [
    {
      icon: icon1,
      title: "Membership Organisations",
      description: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: icon2,
      title: "National Associations",
      description: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: icon3,
      title: "Clubs And Groups",
      description: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#4D4D4D] text-4xl leading-[44px] font-semibold mt-10">
          Manage your entire community
        </h1>
        <h1 className="text-[#4D4D4D] text-4xl leading-[44px] font-semibold">
          in a single system
        </h1>
        <p className="text-[#717171] text-base font-normal my-2">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="px-36 flex justify-between items-center mt-5">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
