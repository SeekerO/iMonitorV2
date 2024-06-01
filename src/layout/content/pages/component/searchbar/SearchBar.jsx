import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="flex w-full items-center gap-1 bg-white rounded-md text-black px-2">
      <CiSearch className="text-[25px] text-slate-400 h-[20px]" />
      <div className="w-[1px] h-[30px] bg-slate-300 ml-2" />
      <input
        type="search"
        placeholder="Search by name, course, or progress"
        value={searchTerm}
        onChange={handleSearchChange}
        className="text-black  rounded-md w-full px-2 outline-white"
      />
    </div>
  );
};

export default SearchBar;
