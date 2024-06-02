import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TbMessageQuestion } from "react-icons/tb";
const List = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data?.filter((meta_data) => {
    const search = searchTerm.toLowerCase();
    return (
      meta_data.name.toLowerCase().includes(search) ||
      meta_data.course.toLowerCase().includes(search)
    );
  });
  return (
    <div className="min-w-[250px] h-full MainColor rounded-l-md">
      <h1 className="px-3 py-2 w-full justify-center flex text-[1.2rem]  font-bold text-white border-b-2 border-slate-300">
        MESSAGES
      </h1>

      <div className="flex w-full items-center gap-1 bg-white text-black px-2 py-1">
        <CiSearch className="text-[25px] text-slate-400 h-[20px]" />
        <div className="w-[1px] h-[30px] bg-slate-300 ml-2" />
        <input
          type="search"
          placeholder="Search by name or course"
          value={searchTerm}
          onChange={handleSearchChange}
          className="text-black  rounded-md w-full px-1  outline-white"
        />
      </div>
      <div className=" h-[70vh] w-full mt-3 overflow-auto flex-col flex">
        {/* Cell Start */}

        {searchTerm !== "" ? (
          filteredData.map((meta_data, index) => (
            <div className="flex px-2 py-1 mb-2 gap-1 hover:bg-opacity-20 bg-slate-100 bg-opacity-0 cursor-pointer text-white">
              <div class="relative flex-shrink-0 truncate ... overflow-hidden flex cursor-pointer">
                <img
                  class="w-[40px] h-[40px] rounded-full"
                  src={meta_data.avatar}
                  alt={meta_data.id}
                  className="bg-slate-300 rounded-full"
                />
                <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-slate-300 dark:border-gray-800 rounded-full"></span>
              </div>
              <div className="flex flex-col w-full  h-full justify-center">
                <label className="cursor-pointer text-[0.9rem] font-semibold">
                  {meta_data.name}
                </label>
                {/* <div className="text-[0.8rem] flex justify-between font-thin">
                  <label>You:Hi!</label> <span>5:03pm</span>
                </div> */}
              </div>
            </div>
          ))
        ) : (
          <div className="h-full w-full justify-center items-start flex font-semibold text-slate-300 mt-[10rem]">
            <span className="flex items-center gap-1">
              <TbMessageQuestion className="text-[1.5rem]"/>
              NO MESSAGES
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
