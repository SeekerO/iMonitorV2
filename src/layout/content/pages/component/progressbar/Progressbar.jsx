import React from "react";

const Progressbar = ({ data }) => {
  const percentage = (min, max) => {
    let duration = Math.round((min / max) * 100);

    return duration;
  };
  return (
    <div class="bg-gray-100 rounded-md shadow-sm overflow-hidden p-0.5 mr-1">
      <div class="relative h-6 flex items-center justify-center">
        <div
          style={{
            width: percentage(data.ojtprogress, data.ojtrequiredprogress),
          }}
          className={`absolute top-0 bottom-0 left-0 rounded-md bg-blue-700`}
        />
        <div class="relative text-indigo-900 font-medium text-sm">
          {percentage(data.ojtprogress, data.ojtrequiredprogress)}%
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
