import React, { Suspense, useState } from "react";
import DataConfig from "../component/dataDisplay/DataConfig";
import ReactPaginate from "react-paginate";
import { FaSort } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Monitoring = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState({ field: "", order: "" });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 25; // Number of items per page

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

  // Calculate the current data to display based on the current page
  const offset = currentPage * itemsPerPage;
  const currentData = sortedData.slice(offset, offset + itemsPerPage);

  // Handle pagination change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="px-5 w-full">
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
                className="text-black  rounded-md w-full px-2 outline-white"
              />
            </div>
          </div>
          <div className="flex p-2 bg-[#0F2167] mt-2 w-full  rounded-md text-white font-semibold justify-between">
            <a
              onClick={() => handleSortChange("name")}
              className=" flex gap-1 items-center cursor-pointer  hover:text-blue-600"
            >
              Sort by Name <FaSort className="text-[15px] mt-1" />
            </a>
            <div className=" py-1">Course</div>
            <a
              onClick={() => handleSortChange("ojtprogress")}
              className="flex gap-1 items-center cursor-pointer hover:text-blue-600"
            >
              Sort by Progress <FaSort className="text-[15px] mt-1" />
            </a>
          </div>
          <div className="h-[62dvh] overflow-auto mt-1">
            <Suspense fallback={"Loading..."}>
              {currentData.map((meta_data, index) => (
                <DataConfig
                  onClick={() => setopenModal(!openModal)}
                  meta_data={meta_data}
                />
              ))}
            </Suspense>
          </div>
          <div className="flex justify-center mt-2">
            <ReactPaginate
              previousLabel={<IoIosArrowBack />}
              nextLabel={<IoIosArrowForward />}
              breakLabel={"..."}
              pageCount={Math.ceil(sortedData.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"flex space-x-2 items-center"}
              pageClassName={
                "px-3 py-1 cursor-pointer rounded border border-gray-300"
              }
              pageLinkClassName={"text-white"}
              previousClassName={
                "px-3 py-1 cursor-pointer rounded border border-gray-300 text-center justify-center"
              }
              previousLinkClassName={"text-white"}
              nextClassName={
                "px-3 py-1 cursor-pointer rounded border border-gray-300"
              }
              nextLinkClassName={"text-white"}
              breakClassName={
                "px-3 py-1 cursor-pointer rounded border border-gray-300"
              }
              breakLinkClassName={"text-white"}
              activeClassName={"bg-blue-950 text-white"}
              activeLinkClassName={"text-white"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Monitoring;
