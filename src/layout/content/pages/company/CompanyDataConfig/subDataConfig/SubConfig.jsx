import React, { useState, useEffect, useRef } from "react";
import { LuDot } from "react-icons/lu";
import { CiCircleInfo } from "react-icons/ci";
import { MdUnarchive } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";
const SubConfig = ({ stud_meta_data }) => {
  const [viewStudentInfo, setviewStudentInfo] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setviewStudentInfo(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ? " overflow-hidden h-[200px]" : "h-1  overflow-hidden"
  return (
    <div
      ref={ref}
      className={`${
        !viewStudentInfo
          ? "h-[24px] duration-300 overflow-hidden "
          : "h-[130px] duration-300 overflow-hidden "
      } px-2 flex flex-col overflow-hidden  bg-blue-950 text-white rounded-sm mt-1  duration-300`}
    >
      <div
        onClick={() => setviewStudentInfo(!viewStudentInfo)}
        className="cursor-pointer active:text-blue-500 flex items-center justify-between"
      >
        <span> {stud_meta_data.fullname}</span>{" "}
        <span>
          {stud_meta_data.status === false ? (
            <IoTimerSharp className="text-yellow-300" />
          ) : (
            <MdUnarchive className="text-green-300" />
          )}
        </span>
      </div>
      <label className="flex items-center">
        <LuDot />
        {stud_meta_data.course}
      </label>
      <label className="flex items-center">
        <LuDot />
        {stud_meta_data.section}
      </label>
      <label className="flex items-center">
        <LuDot />
        {stud_meta_data.email}
      </label>
      <label className="flex items-center">
        <LuDot />
        {stud_meta_data.status === false ? "Ongoing" : "Archived"}
      </label>
    </div>
  );
};
export default SubConfig;
