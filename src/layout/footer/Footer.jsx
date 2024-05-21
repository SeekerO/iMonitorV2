import React from "react";

const Footer = () => {
  return (
    <div className="MainColor h-full w-full flex items-center px-3 ">
      <label className="text-white text-[12px] ">
        © 2023{" "}
        <em
          onClick={() => window.open("https://www.seekerportfolio.site/", "")}
          className="hover:underline cursor-pointer hover:text-blue-400"
        >
          SeekerDev
        </em>
        . All Rights Reserved.
      </label>
    </div>
  );
};

export default Footer;
