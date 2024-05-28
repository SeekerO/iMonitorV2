import React, { useState } from "react";
import DataFetcher from "../component/fetcher/DataFetcher";
import { FaSort } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import DataConfig from "./dataDisplay/DataConfig";
const Monitoring = () => {
  const data = DataFetcher();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState({ field: "", order: "" });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (field) => {
    setSortCriteria((prevSortCriteria) => {
      const isSameField = prevSortCriteria.field === field;
      const newOrder =
        isSameField && prevSortCriteria.order === "asc" ? "desc" : "asc";
      return { field, order: newOrder };
    });
  };

  const filteredData = data.filter((meta_data) => {
    const search = searchTerm.toLowerCase();
    return (
      meta_data.name.toLowerCase().includes(search) ||
      meta_data.course.toLowerCase().includes(search) ||
      meta_data.ojtprogress.toString().includes(search)
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortCriteria.field) {
      const fieldA = a[sortCriteria.field];
      const fieldB = b[sortCriteria.field];

      if (fieldA < fieldB) {
        return sortCriteria.order === "asc" ? -1 : 1;
      }
      if (fieldA > fieldB) {
        return sortCriteria.order === "asc" ? 1 : -1;
      }
      return 0;
    }
    return 0;
  });

  return (
    <div className="px-5">
      <div className="w-full h-[88dvh] bg-slate-300  rounded-md  backdrop-blur-lg bg-opacity-40 shadow-2xl shadow-slate-800 text-white p-4">
        <div className="flex gap-2 h-fit w-full">
          <h1 className="text-[35px] font-semibold">Monitoring</h1>
          <div className="flex w-full items-center gap-1 bg-white rounded-md text-black px-2">
            <CiSearch className="text-[25px] text-slate-400 h-[20px]" />
            <div className="w-[1px] h-[30px] bg-slate-300 ml-2" />
            <input
              type="search"
              placeholder="Search by name, course, or progress"
              value={searchTerm}
              onChange={handleSearchChange}
              className="text-black  rounded-md w-full px-2"
            />
          </div>
        </div>
        <div className="text-black">
          <div>
            <div className="flex p-2 bg-[#0F2167] mt-2  rounded-md text-white font-semibold">
              <a
                onClick={() => handleSortChange("name")}
                className="w-[21rem] flex gap-1 items-center cursor-pointer  hover:text-blue-600"
              >
                Sort by Name <FaSort className="text-[15px] mt-1" />
              </a>
              <div className="w-[45rem] py-1">Course</div>
              <a
                onClick={() => handleSortChange("ojtprogress")}
                className="flex gap-1 items-center cursor-pointer hover:text-blue-600"
              >
                Sort by Progress <FaSort className="text-[15px] mt-1" />
              </a>
            </div>
            {sortedData.map((meta_data, index) => (
              <DataConfig monitoring_meta_data={meta_data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
