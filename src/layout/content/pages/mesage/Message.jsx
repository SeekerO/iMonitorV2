import React, { useState } from "react";
import List from "./contactslist/List";
import Layout from "./messaginglayout/Layout";

const Message = ({ data, socket }) => {
  const [messageTo, setmessageTo] = useState("as");
  return (
    <div className="h-full w-full px-3 py-2 ">
      <div className="bg-slate-400 p-2 bg-opacity-50 h-[85vh] w-full rounded-md flex shadow-md gap-2">
        <List data={data} setmessageTo={setmessageTo} />
        <Layout messageTo={messageTo} socket={socket} />
      </div>
    </div>
  );
};

export default Message;
