import React, { useState } from "react";
import { PiMonitorBold } from "react-icons/pi";
import { FaRegBuilding, FaRegListAlt } from "react-icons/fa";
import { BiMessageAltEdit } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdAppRegistration, MdOutlineAnnouncement } from "react-icons/md";
import { BsClipboardData, BsUpload } from "react-icons/bs";
import { IoCreate } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpenSubmenu, setOpenSubmenu] = useState(false);
  const location = useLocation();

  const Buttons = [
    { to: "/registration", title: "Registration", icon: <MdAppRegistration /> },
    { to: "/monitoring", title: "Monitoring", icon: <PiMonitorBold /> },
    { to: "/masterlist", title: "Master List", icon: <FaRegListAlt /> },
    { to: "/company", title: "Company", icon: <FaRegBuilding /> },
    { to: "/message", title: "Message", icon: <BiMessageAltEdit /> },
  ];

  const SubMenu = [
    {
      to: "/createannouncement",
      submenu: "Create Announcement",
      icon: <IoCreate />,
    },
    { to: "/activitylog", submenu: "Activity Log", icon: <BsClipboardData /> },
    { to: "/uploadlog", submenu: "Upload Log", icon: <BsUpload /> },
  ];

  return (
    <div className="flex flex-col pl-5 mt-2">
      {Buttons.map((button, index) => (
        <Link
          key={index}
          to={button.to}
          className={`       ${
            location.pathname === button.to
              ? "bg-[#274472] text-slate-600 shadow-lg "
              : "hover:bg-slate-200 hover:bg-opacity-25"
          } flex  text-white items-center gap-2 mt-1   p-2 rounded-l-md cursor-pointer`}
        >
          <span className="text-[25px]">{button.icon}</span>
          <span className="text-[15px] font-semibold flex items-center gap-2">
            {button.title}
          </span>
        </Link>
      ))}
      <div
        onClick={() => setOpenSubmenu(!isOpenSubmenu)}
        className="flex text-white items-center gap-2 mt-1  hover:bg-slate-200 hover:bg-opacity-25 p-2 rounded-l-md cursor-pointer "
      >
        <span className="text-[25px]">
          <MdOutlineAnnouncement />
        </span>
        <span className="text-[15px] font-semibold flex items-center gap-2">
          Announcement
          <IoMdArrowDropdown />
        </span>
      </div>

      <div
        className={`${
          isOpenSubmenu ? " overflow-hidden h-[200px]" : "h-1  overflow-hidden"
        } duration-300 pl-1`}
      >
        {SubMenu.map((submenu, index) => (
          <Link
            key={index}
            to={submenu.to}
            className={`       ${
              location.pathname === submenu.to
                ? "bg-[#274472] text-slate-600"
                : "hover:bg-slate-200 hover:bg-opacity-25"
            } flex  text-white items-center gap-2 mt-1   p-2 rounded-l-md cursor-pointer`}
          >
            <span className="text-[20px]">{submenu.icon}</span>
            <span className={`font-normal flex items-center gap-2 text-[13px]`}>
              {submenu.submenu}
            </span>
          </Link>
        ))}
      </div>
      {/* {isOpenSubmenu && (  )} */}
    </div>
  );
};

export default Sidebar;
