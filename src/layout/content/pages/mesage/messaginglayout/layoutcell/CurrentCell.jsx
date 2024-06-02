import React from "react";

const CurrentCell = ({ message }) => {
  return (
    <div className="flex justify-end items-start gap-1 text-black mt-1">
      <div>
        <p className="min-w-[10rem] max-w-[30rem]   MainColor break-all text-white p-2 rounded-md">
          {`${message}`}
        </p>
      </div>
    </div>
  );
};

export default CurrentCell;
