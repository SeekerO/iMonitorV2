import React, { useRef, useState, useEffect } from "react";
import List from "./contactslist/List";
import Layout from "./messaginglayout/Layout";
import SideLayout from "./sidelayout/SideLayout";

const Message = ({ data, socket }) => {
  const [messageTo, setmessageTo] = useState("");
  const [deviceType, setDeviceType] = useState(true);
  const [openSideLayout, setopenSideLayout] = useState(false);
  const [openLayout, setopenLayout] = useState(false);

  const detectDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      // Adjust the width threshold as needed

      setopenLayout(false);
    } else {
      setDeviceType(true);
    }
  };

  useEffect(() => {
    detectDeviceType(); // Initial check
    window.addEventListener("resize", detectDeviceType);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", detectDeviceType);
    };
  }, []);

  const handleOpenChat = (meta_data) => {
    const width = window.innerWidth;
    if (width <= 786) {
      if (!openLayout) {
        setopenLayout(!openLayout);
        setmessageTo(meta_data);
      } else {
        setopenLayout(!openLayout);
      }
    } else {
      setmessageTo(meta_data);
    }
  };

  return (
    <div className="h-full w-full py-2 ">
      <div className="bg-slate-400 p-2 bg-opacity-50 h-[85vh] w-full rounded-md flex shadow-md gap-2">
        <List
          data={data}
          setmessageTo={setmessageTo}
          deviceType={deviceType}
          openLayout={openLayout}
          handleOpenChat={handleOpenChat}
        />
        <Layout
          messageTo={messageTo}
          socket={socket}
          openSideLayout={openSideLayout}
          setopenSideLayout={setopenSideLayout}
          deviceType={deviceType}
          openLayout={openLayout}
          handleOpenChat={handleOpenChat}
        />
        <SideLayout
          openSideLayout={openSideLayout}
          setopenSideLayout={setopenSideLayout}
          deviceType={deviceType}
        />
      </div>
    </div>
  );
};

export default Message;
