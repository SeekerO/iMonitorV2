import React, { useState, Suspense } from "react";
import DataConfig from "../component/dataDisplay/DataConfig";
import ReactPaginate from "react-paginate";
import { FaSort } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SearchBar from "../component/searchbar/SearchBar";

const MasterList = ({ data }) => {
  const data_master = filterOjtData(data);

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

  const filteredData = data_master?.filter((meta_data) => {
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

  function filterOjtData(dataArray) {
    return dataArray.filter((data) => {
      return (
        data.ojtprogress <= data.ojtrequiredprogress && data.status === true
      );
    });
  }

  const LoadingData = [
    { data: 1 },
    { data: 2 },
    { data: 3 },
    { data: 4 },
    { data: 5 },
    { data: 6 },
    { data: 7 },
    { data: 8 },
  ];

  return (
    <>
      <div className="w-full">
        <div className="w-full h-[88dvh] bg-slate-300  rounded-md  backdrop-blur-lg bg-opacity-40 shadow-2xl shadow-slate-800 text-white p-4">
          <div className="flex gap-2 h-fit w-full">
            <h1 className="text-[35px] font-semibold flex-shrink-0">
              Master List
            </h1>
            <SearchBar
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
            />
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
              Sort by Status <FaSort className="text-[15px] mt-1" />
            </a>
          </div>
          <div className="h-[62dvh] overflow-auto mt-1">
            {currentData.map((meta_data, index) => (
              <DataConfig
                key={meta_data.id}
                onClick={() => setopenModal(!openModal)}
                meta_data={meta_data}
                datafrom={"masterlist"}
              />
            ))}
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
      </div>{" "}
    </>
  );
};

export default MasterList;
