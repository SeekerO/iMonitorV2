import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
const SideLayout = ({ openSideLayout, deviceType, setopenSideLayout }) => {
  const [openFiles, setopenFiles] = useState(false);
  const [openImages, setopenImages] = useState(false);
  const sidelayout = useRef();
  const files = useRef();
  const images = useRef();

  const handleClickOutside = (event) => {
    if (files.current && !files.current.contains(event.target)) {
      setopenFiles(false);
    }
    if (images.current && !images.current.contains(event.target)) {
      setopenImages(false);
    }
    if (sidelayout.current && !sidelayout.current.contains(event.target)) {
      setopenSideLayout(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={sidelayout}
      className={`${
        !openSideLayout ? "w-[0px]" : "w-[300px] "
      } h-full duration-300 overflow-hidden MainColor rounded-md`}
    >
      <div
        onClick={() => setopenFiles(!openFiles)}
        className="flex items-center group/files cursor-pointer justify-between px-2 py-1 bg-slate-700 text-white hover:py-2 hover:shadow-md duration-300"
      >
        Files
        <IoIosArrowForward className="group-hover/files:rotate-90 duration-300" />
      </div>
      <div
        ref={files}
        className={`${
          !openFiles ? "h-[0px]" : "h-[85%]"
        } duration-300 bg-slate-200`}
      ></div>
      <div
        onClick={() => setopenImages(!openImages)}
        className="flex items-center group/image cursor-pointer justify-between px-2 py-1 bg-slate-700 text-white hover:py-2 hover:shadow-md duration-300"
      >
        Image{" "}
        <IoIosArrowForward className="group-hover/image:rotate-90 duration-300" />
      </div>
      <div
        ref={images}
        className={`${
          !openImages ? "h-[0px]" : "h-[85%]"
        } duration-300 bg-slate-200`}
      ></div>
    </div>
  );
};

export default SideLayout;
