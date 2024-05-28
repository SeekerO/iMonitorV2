import React, { useState } from "react";
import { motion } from "framer-motion";
import { RiUpload2Line } from "react-icons/ri";

const Registration = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    suffix: "",
    program: "",
    section: "",
    ojtstart: "",
    ojtend: "",
    starttime: "",
    endtime: "",
    companyname: "",
    companyaddress: "",
    supervisorname: "",
    supervisorcontact: "",
    designation: "",
    officeemail: "",
    officenumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = () => {
    for (const [key, value] of Object.entries(formData)) {
      if (typeof value === "string" && value.trim() === "") {
        alert(`${key}`);
        return;
      }
    }
  };

  return (
    <div className="px-10">
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className=" p-2 rounded-lg overflow-auto  bg-slate-300 h-fit w-full overflow-y-auto text-black backdrop-blur-lg bg-opacity-15 shadow-2xl shadow-slate-800"
      >
        <div className=" font-bold tracking-wide mt-5 w-[95%] flex justify-between items-center text-slate-100">
          <div className="gap-2 flex h-fit ">
            <span className="text-[30px]">REGISTRATION</span>
            <span className="flex font-thin gap-1 items-center">
              <RiUpload2Line />
              Batch Upload
            </span>
          </div>
          <div className="font-thin">S.Y 2024-2025</div>
        </div>
        <div className="mt-2 w-[95%] flex flex-col gap-y-3">
          <div className="flex gap-2 items-center ">
            <label className="reg-title">FULLNAME</label>
            <input
              onChange={handleChange}
              required
              type="text"
              name="fname"
              placeholder="First Name"
              className="py-1 px-2 w-full rounded-md"
            />
            <input
              onChange={handleChange}
              required
              type="text"
              name="m.i"
              placeholder="M.I"
              className="py-1 px-2 w-[60px] rounded-md "
            />
            <input
              onChange={handleChange}
              required
              type="text"
              name="lname"
              placeholder="Last Name"
              className="py-1 px-2 w-full rounded-md"
            />
            <input
              onChange={handleChange}
              type="text"
              name="suffix"
              placeholder="Suffix"
              className="py-1 px-2 w-[60px] rounded-md "
            />
          </div>
          <div className="flex gap-2 items-center ">
            <label className="reg-title">PROGRAM</label>
            <select
              required
              onChange={handleChange}
              name="program"
              className="py-1 px-2 w-full rounded-md text-black outline-none cursor-pointer"
            >
              <option value="" className="cursor-pointer text-slate-600">
                Select Item
              </option>
              <option value="item1" className="cursor-pointer">
                ITEM 1
              </option>
              <option value="item2" className="cursor-pointer">
                ITEM 2
              </option>
              <option value="item3" className="cursor-pointer">
                ITEM 3
              </option>
              <option value="item4" className="cursor-pointer">
                ITEM 4
              </option>
            </select>
            <input
              onChange={handleChange}
              required
              type="text"
              name="section"
              placeholder="Section"
              className="py-1 px-2 w-full rounded-md "
            />
          </div>
          <div className="flex gap-2 items-center ">
            <label className=" reg-title">OJT START</label>
            <input
              onChange={handleChange}
              required
              type="datetime-local"
              name="ojtstart"
              className="py-1 px-2 w-full rounded-md"
            />
            <label className=" reg-title">OJT END</label>
            <input
              onChange={handleChange}
              required
              type="datetime-local"
              name="ojtend"
              className="py-1 px-2 w-full rounded-md "
            />
          </div>
          <div className="flex gap-2 ">
            <label className=" reg-title">REMARKS</label>
            <textarea
              onChange={handleChange}
              rows={3}
              name="remarks"
              placeholder="Enter Remarks"
              className="py-1 px-2 w-full rounded-md"
            />
          </div>
        </div>
        <h1 className="text-[30px] font-bold tracking-wider mt-10 text-slate-100">
          COMPANY INFORMATION
        </h1>
        <div className="mt-2 w-[95%] flex flex-col gap-y-3 text-black">
          <div className="flex gap-2 items-center ">
            <label className="reg-title">START TIME</label>
            <input
              onChange={handleChange}
              required
              type="time"
              placeholder="First Name"
              name="starttime"
              className="py-1 px-2 w-[150px] rounded-md"
            />
            <label className="reg-title">END TIME</label>
            <input
              onChange={handleChange}
              required
              type="time"
              placeholder="First Name"
              name="endtime"
              className="py-1 px-2 w-[150px] rounded-md"
            />
          </div>
          <div className="flex gap-2 items-center ">
            <label className="reg-title">COMPANY NAME</label>
            <input
              onChange={handleChange}
              required
              type="text"
              placeholder="Company Name"
              name="companyname"
              className="py-1 px-2 w-full rounded-md"
            />
            <label className="reg-title">COMPANY ADDRESS</label>
            <input
              onChange={handleChange}
              required
              type="text"
              placeholder="Company Address"
              name="companyaddress"
              className="py-1 px-2 w-full rounded-md"
            />
          </div>

          <div className="flex gap-2 items-center ">
            <label className="reg-title">SUPERVISOR NAME</label>
            <input
              onChange={handleChange}
              required
              type="text"
              placeholder="Supervisor Name"
              name="supervisorname"
              className="py-1 px-2 w-full rounded-md"
            />
            <label className="reg-title">SUPERVISOR CONTACT</label>
            <input
              onChange={handleChange}
              required
              type="text"
              placeholder="Supervisor Contact #"
              name="supervisorcontact"
              className="py-1 px-2 w-full rounded-md"
            />
          </div>
          <div className="flex gap-2 items-center ">
            <label className="reg-title">DESIGNATION</label>
            <input
              onChange={handleChange}
              required
              type="text"
              placeholder="Designation"
              name="designation"
              className="py-1 px-2 w-full rounded-md"
            />
            <label className="reg-title">OFFICE EMAIL</label>
            <input
              onChange={handleChange}
              required
              type="text"
              placeholder="Office Email"
              name="officeemail"
              className="py-1 px-2 w-full rounded-md"
            />
            <label className="reg-title">OFFICE NUMBER</label>
            <input
              onChange={handleChange}
              required
              type="text"
              placeholder="Office Number"
              name="officenumber"
              className="py-1 px-2 w-full rounded-md"
            />
          </div>
        </div>
        <button
          onClick={() => submitForm()}
          className="w-[95%]  text-slate-100 mt-4 p-2 SecondColor font-semibold hover:text-blue-800 rounded-md hover:shadow-md hover:shadow-slate-800"
        >
          REGISTER
        </button>
      </motion.div>
    </div>
  );
};

export default Registration;
