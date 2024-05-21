import React from "react";

const Header = ({ setOpenLogin, isOpenLogin, isLoggedIn }) => {
  return (
    <div className="px-7 flex items-center h-full MainColor justify-between text-white">
      <div className="flex gap-2 items">
        <img
          src="https://imonitor.site/static/media/iMonitor.72b0bbe1dd123be29a7a.png"
          className="w-20 rounded-md"
        />
        <span className=" font-bold text-[25px]">iMonitor</span>
      </div>
      <div className="relative">
        {!isLoggedIn ? (
          <a
            onClick={() => setOpenLogin(!isOpenLogin)}
            className={`${
              isOpenLogin
                ? "hidden"
                : "SecondColor px-3 py-1 rounded-md font-semibold hover:bg-opacity-50 cursor-pointer"
            }`}
          >
            LOGIN
          </a>
        ) : (
          <div className=" w-[45px] h-[45px] flex-shrink-0 rounded-full bg-white text-black items-center justify-center flex shadow-md shadow-slate-800">
            Hi!
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
