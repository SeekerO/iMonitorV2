import React from "react";

const Progressbar = ({ data }) => {
  const percentage = (min, max) => {
    let duration = Math.round((min / max) * 100);
    if (duration === 100) return duration + "%";
    else return duration + "%";
  };
  return (
    <div class="bg-gray-100 rounded-md shadow-sm overflow-hidden p-0.5 mr-1 w-full">
      <div class="relative h-6 flex items-center justify-center w-full">
        <div
          // style={{
          //   width: percentage(data.ojtprogress, data.ojtrequiredprogress),
          // }}
          style={{
            width: percentage(data.ojtprogress, data.ojtrequiredprogress),
          }}
          className={`absolute top-0 bottom-0 left-0 rounded-md bg-blue-700`}
        />
        <div class="relative text-indigo-900 font-medium text-sm">
          {percentage(data.ojtprogress, data.ojtrequiredprogress)}
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
