import React from "react";

const CreateAnnouncement = () => {
  return (
    <div className="px-2 w-full h-full">
      <div className="w-full h-fit bg-slate-100 bg-opacity-50 rounded-md  px-2 ">
        <h1 className="font-semibold text-[30px] text-white">
          Create Announcement
        </h1>
        <form className="">
          <div className=" items-center gap-2 text-white w-full flex mt-4">
            <span className="font-semibold text-[20px]">TITLE:</span>
            <input
              type="text"
              placeholder="Input Title Here..."
              className="rounded-md text-black outline-none border-none  focus:shadow-md"
            />
          </div>
          <div className="items-center gap-2 text-white w-full flex mt-4">
            <span className="font-semibold text-[20px]">DURATION:</span>
            <input
              type="datetime-local"
              placeholder="Input Title Here..."
              className="rounded-md text-black outline-none border-none  focus:shadow-md"
            />
          </div>
          <div className="items-center gap-2 text-white w-full flex mt-4">
            <span className="font-semibold text-[20px]">ALLOW UPLOAD BOX:</span>
            <input
              type="checkbox"
              placeholder="Input Title Here..."
              className="h-7 w-7 rounded-sm cursor-pointer"
            />
          </div>
          <div className=" gap-2 text-white w-full flex flex-col mt-4">
            <textarea
              className="rounded-md resize-none"
              placeholder="Type your announcement here.."
              rows={5}
            />
          </div>
          <button className="w-full p-2 AssetColor mt-2 mb-5 rounded-md font-semibold text-white">
            UPLOAD
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAnnouncement;
