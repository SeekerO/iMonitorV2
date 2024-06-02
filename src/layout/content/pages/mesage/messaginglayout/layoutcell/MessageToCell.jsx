import React from "react";

const MessageToCell = ({ message, username }) => {
  return (
    <div className="flex justify-start items-start  gap-1 text-black mt-1">
      <div className="">
        <h1 className="font-normal  text-[0.8rem] ml-2">{username}</h1>
        <p className="min-w-[10rem] max-w-[30rem]  break-all bg-slate-400 text-black p-2 rounded-md">
          {`${message}`}
        </p>
      </div>
    </div>
  );
};

export default MessageToCell;
