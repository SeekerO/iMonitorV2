import React, { useState } from "react";
import Cells from "./cell/Cells";

const Dashbaord = ({ data }) => {
  return (
    <div className="w-full h-[88%] md:flex grid  space-x-2 overflow-auto">
      <div className="w-full h-full rounded-md flex flex-col space-y-2">
        <Cells data={data} />
        <div className="w-full h-full bg-slate-200 bg-opacity-30 rounded-md overflow-auto"></div>
      </div>
      <div className="shrink-0 md:w-[30rem] w-full h-full rounded-md bg-slate-200 bg-opacity-30"></div>
    </div>
  );
};

export default Dashbaord;
