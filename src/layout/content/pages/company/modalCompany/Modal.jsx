import React, { useState, useEffect, useRef } from "react";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { IoIdCard, IoPerson } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdTitle } from "react-icons/md";
import { BsFillPhoneFill, BsFillBuildingsFill } from "react-icons/bs";
import SubConfig from "../CompanyDataConfig/subDataConfig/SubConfig";

const Modal = ({ openModal, setopenModal, meta_data }) => {
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

  if (!openModal) return;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 h-full rounded-sm w-full flex justify-center ">
      <div
        ref={ref}
        className="bg-blue-100 text-black w-[50rem] h-[30rem] mt-10 rounded-md shadow-md p-2 gap-y-2 "
      >
        <div className="font-semibold tracking-wider underline underline-offset-2 flex justify-between w-full items-center">
          <label className="flex gap-2 items-center h-fit">
            COMPANY INFORMATION{" "}
            <span className="text-[10px] bg-slate-900 text-white h-fit px-1 rounded-md font-thin">
              {meta_data.company}
            </span>
          </label>
          <IoClose
            onClick={() => setopenModal(!openModal)}
            className="text-[25px] active:text-red-500 cursor-pointer"
          />
        </div>
        <div className="flex h-full">
          <div className="flex flex-col gap-y-5 mt-2 w-full">
            <label className="text-[25px] flex items-center gap-1">
              <BsFillBuildingsFill />
              {meta_data.companyname}
            </label>
            <label className="flex items-center gap-1">
              <FaMapPin />
              {meta_data.companyaddress}
            </label>
            <label className="flex items-center gap-1">
              <FaPhoneAlt />
              {meta_data.companynumber}
            </label>
            <label className="flex items-center gap-1">
              <IoPerson />
              {meta_data.supervisor}
            </label>
            <label className="flex items-center gap-1">
              <BsFillPhoneFill />
              {meta_data.contactnumber}
            </label>
            <label className="flex items-center gap-1">
              <MdEmail /> {meta_data.supervisoremail}
            </label>
            <label className="flex items-center gap-1">
              <MdTitle /> {meta_data.designation}
            </label>
          </div>{" "}
          <div className="flex flex-col gap-y-5 w-full border-s-2 p-1 h-[60dvh]  border-slate-300">
            <label className="text-[25px] flex items-center gap-1">
              <IoIdCard />
              STUDENT ENROLLED{" "}
              <span className="text-[15px] bg-slate-700 px-2 rounded-md text-white">
                {meta_data.studentEnrolled}
              </span>
            </label>
            <div className="h-full w-full overflow-y-auto">
              {meta_data.studentInfos.map((stud_meta_data) => (
                <SubConfig
                  key={stud_meta_data.id}
                  stud_meta_data={stud_meta_data}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
// fullname: student.name,
// course: student.course,
// acro: student.acro,
// section: student.section,
// email: student.email,
// ojtprogress: student.ojtprogress,
// ojtrequiredprogress: student.ojtrequiredprogress,
// ojtstartdate: student.ojtstartdate,
// ojtenddate: student.ojtenddate,
// timeIN: student.timeIN,
// timeOUT: student.timeOUT,
// status: student.statu
