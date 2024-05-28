import React from "react";

const DataConfig = ({ monitoring_meta_data }) => {
  return (
    <div
      key={monitoring_meta_data.id}
      className="text-white MainColor gap-2 flex items-center p-2  rounded-md mt-1 hover:scale-x-105 hover:shadow-md hover:scale-y-110 duration-300 cursor-pointer active:bg-opacity-25"
    >
      <div className="w-[20rem]">{monitoring_meta_data.name}</div>
      <div className="w-[50rem]"> {monitoring_meta_data.course}</div>
      <div className="">
        {monitoring_meta_data.ojtprogress} |{" "}
        {monitoring_meta_data.ojtrequiredprogress}
      </div>
    </div>
  );
};

export default DataConfig;
