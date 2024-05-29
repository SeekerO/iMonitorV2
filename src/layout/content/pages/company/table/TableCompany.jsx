import React from "react";
import DataConfig from "../CompanyDataConfig/DataConfig";
import ReactPaginate from "react-paginate";
import { FaSort } from "react-icons/fa";
const TableCompany = ({
  currentData,
  handleSortChange,
  itemsPerPage,
  sortedData,
  handlePageChange,
}) => {
  return (
    <>
      <div className="flex p-2 bg-[#0F2167] mt-2 w-full  rounded-md text-white font-semibold justify-between">
        <a
          onClick={() => handleSortChange("companyname")}
          className=" flex gap-1 items-center cursor-pointer  hover:text-blue-600"
        >
          Sort by Company Name <FaSort className="text-[15px] mt-1" />
        </a>
        <div className=" py-1">Address</div>
        <a
          onClick={() => handleSortChange("studentEnrolled")}
          className="flex gap-1 items-center cursor-pointer hover:text-blue-600"
        >
          Sort by Enrolled Student <FaSort className="text-[15px] mt-1" />
        </a>
      </div>
      <div className="h-[62dvh] overflow-auto mt-1">
        {currentData.map((meta_data, index) => (
          <DataConfig key={meta_data.ids} meta_data={meta_data} />
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(sortedData.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"flex space-x-2"}
          pageClassName={
            "px-3 py-1 cursor-pointer rounded border border-gray-300"
          }
          pageLinkClassName={"text-white"}
          previousClassName={
            "px-3 py-1 cursor-pointer rounded border border-gray-300"
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
    </>
  );
};

export default TableCompany;
