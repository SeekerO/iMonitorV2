import React from "react";

const ProgressChecker = ({ progress, maxprogress }) => {
  if (progress === maxprogress) {
    return (
      <div class="bg-gray-100 rounded-md shadow-sm overflow-hidden p-0.5 mr-1">
        <div class="relative h-6 flex items-center justify-center">
          <div
            className={`w-full absolute top-0 bottom-0 left-0 rounded-md bg-green-700`}
          />
          <div class="relative text-white font-thin text-sm px-7">
            COMPLETE
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="bg-gray-100 rounded-md shadow-sm overflow-hidden p-0.5 mr-1">
        <div class="relative h-6 flex items-center justify-center">
          <div
            className={`w-full absolute top-0 bottom-0 left-0 rounded-md bg-gray-700`}
          />
          <div class="relative text-white font-thin text-sm px-5 ">
            INCOMPLETE
          </div>
        </div>
      </div>
    );
  }
};

export default ProgressChecker;
