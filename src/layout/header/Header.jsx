import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
const Header = ({ setOpenLogin, isOpenLogin, isLoggedIn, userData }) => {
  const [isClickedProfile, setClickedProfile] = useState(false);
  const ref = useRef(null);

  const handleSignOut = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setClickedProfile(!isClickedProfile);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ visibility: "hidden" }}
      animate={{ visibility: "visible" }}
      transition={{ duration: 0, delay: 3 }}
      ref={ref}
      className="px-7 flex items-center h-full MainColor justify-between text-white"
    >
      <div className="flex gap-2 items">
        <img src="/iMonitor.png" className="w-20 rounded-md" />
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
          <div className="z-50 flex items-center gap-2">
            {isClickedProfile ? (
              <div> {userData.username}</div>
            ) : (
              <a
                onClick={() => handleSignOut()}
                className="active:text-blue-600 cursor-pointer hover:underline hover:underline-offset-2"
              >
                Sign Out
              </a>
            )}

            <div
              onClick={() => setClickedProfile(!isClickedProfile)}
              className=" w-[45px] h-[45px] flex-shrink-0 rounded-full cursor-pointer bg-white text-black items-center justify-center flex shadow-md shadow-slate-800"
            ></div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
