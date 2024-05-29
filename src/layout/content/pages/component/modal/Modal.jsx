import React, { useRef, useEffect, useState } from "react";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Progressbar from "../progressbar/Progressbar";
import { IoIdCard, IoPerson } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdTitle } from "react-icons/md";
import { BsFillPhoneFill, BsFillBuildingsFill } from "react-icons/bs";
import moment from "moment";
const Modal = ({ openModal, setopenModal, data, datafrom }) => {
  const [deviceType, setDeviceType] = useState(true);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setopenModal(false);
    }
  };

  const detectDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      // Adjust the width threshold as needed
      setDeviceType(false);
    } else {
      setDeviceType(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    detectDeviceType(); // Initial check
    window.addEventListener("resize", detectDeviceType);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", detectDeviceType);
    };
  }, []);

  const MockData = [
    { id: 1, title: "Pic1" },
    { id: 2, title: "Pic1" },
    { id: 3, title: "Pic1" },
    { id: 4, title: "Pic1" },
    { id: 5, title: "Pic1" },
  ];

  if (!openModal) return;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 h-full rounded-sm w-full flex justify-center z-50">
      <div
        ref={ref}
        className="bg-blue-100 text-black w-[50rem] h-[30rem] mt-10 rounded-md shadow-md p-2  "
      >
        <div className="font-semibold tracking-wider  flex justify-between w-full items-center ">
          <label className="flex gap-2 items-center h-fit">
            <span className="underline underline-offset-2">
              STUDENT INFORMATION
            </span>
            <span className="text-[10px] bg-slate-900 text-white h-fit px-1 rounded-md font-thin">
              {data.section}
            </span>
            {data.status === false ? (
              <span className="text-[10px] bg-orange-500 text-white h-fit px-1 rounded-md font-thin no-underline">
                Ongoing
              </span>
            ) : (
              <span className="text-[10px] bg-green-500 text-white h-fit px-1 rounded-md font-thin">
                Archvied
              </span>
            )}
          </label>
          <IoClose
            onClick={() => setopenModal(!openModal)}
            className="text-[25px] active:text-red-500 cursor-pointer"
          />
        </div>
        <div
          className={`${
            deviceType ? "flex overflow-hidden" : "flex flex-col overflow-auto"
          } h-[90%]  `}
        >
          <div className="w-full h-full mt-2 px-2  ">
            <div className="w-full justify-center flex">
              <img
                src={data.avatar}
                className="w-[200px] bg-slate-00 shadow-md rounded-full shadow-slate-700 mt-5 object-fill"
              />
            </div>
            <div className="flex flex-col flex-grow  mt-5 font-semibold text-[15px] items-center justify-center gap-y-4">
              <label className="text-[25px] flex items-cente">
                {data.name}
              </label>
              <label className="text-[15px]">{data.course}</label>
              <label className="underline underline-offset-4 text-blue-600">
                {data.email}
              </label>
            </div>
            <div className="mt-3  gap-2 ">
              <Progressbar data={data} />
              <div className="flex justify-between">
                <div className="text-[9px] ml-0.5">
                  OJT DURATION:{" "}
                  {moment(new Date(data.ojtstartdate))
                    .subtract(10, "days")
                    .calendar()}
                  -{" "}
                  {moment(new Date(data.ojtenddate))
                    .subtract(10, "days")
                    .calendar()}
                </div>
                <label className="flex gap-1 text-[9px] mr-1">
                  OJT SCHEDULE:
                  <span className="flex">
                    {moment(data.timeIN, "HH:mm").format("LT")} -{" "}
                    {moment(data.timeOUT, "HH:mm").format("LT")}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full h-[90%] md:mt-5 mt-2 px-2   border-s-2 border-slate-300 p-1 flex flex-col gap-2 font-semibold text-[15px]">
            <label className="text-[20px] flex items-center gap-1">
              <BsFillBuildingsFill />
              {data.companyname}
            </label>
            <label className="flex items-center gap-1">
              <FaMapPin />
              {data.companyaddress}
            </label>
            <label className="flex items-center gap-1">
              <FaPhoneAlt />
              {data.companynumber}
            </label>
            <label className="flex items-center gap-1">
              <IoPerson />
              {data.supervisor}
            </label>
            <label className="flex items-center gap-1">
              <BsFillPhoneFill />
              {data.contactnumber}
            </label>
            <label className="flex items-center gap-1">
              <MdEmail /> {data.supervisoremail}
            </label>
            <label className="flex items-center gap-1">
              <MdTitle /> {data.designation}
            </label>
            <div className="w-full  bg-slate-200 h-full shadow-md overflow-auto px-2 py-2">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MockData.map((image_data, index) => (
                  <div class="bg-white h-[100px] w-[170px] shadow rounded flex justify-center items-center">
                    {image_data.id}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
{
  /* <div className="h-[100px] w-[200px] bg-slate-200 mr-1 rounded-md flex justify-center items-center">
{image_data.id}
</div> */
}
