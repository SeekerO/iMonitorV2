import React, { useState } from "react";
import DataFetcher from "../component/fetcher/DataFetcher";
import { FaSort } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import DataConfig from "./CompanyDataConfig/DataConfig";
import ReactPaginate from "react-paginate";

const Company = () => {
  const data = countStudentsByCompany(DataFetcher());
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState({ field: "", order: "" });
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 25; // Number of items per page

  function countStudentsByCompany(data) {
    const companies = [];

    data.forEach((student) => {
      // Find the company by name in the existing list
      const existingCompany = companies.find(
        (company) => company.companyname === student.companyname
      );

      // Structure for collecting all relevant student info
      const studentInfo = {
        id: student.id,
        fullname: student.name,
        course: student.course,
        acro: student.acro,
        section: student.section,
        email: student.email,
        ojtprogress: student.ojtprogress,
        ojtrequiredprogress: student.ojtrequiredprogress,
        ojtstartdate: student.ojtstartdate,
        ojtenddate: student.ojtenddate,
        timeIN: student.timeIN,
        timeOUT: student.timeOUT,
        status: student.status,
        uuid: student.uuid,
      };

      if (existingCompany) {
        // If the company exists, increment the enrolled count and push student details
        existingCompany.studentEnrolled += 1;
        existingCompany.ids.push(student.id);
        existingCompany.studentInfos.push(studentInfo);
      } else {
        // If the company does not exist, create a new entry with initial values
        companies.push({
          companyname: student.companyname,
          companyaddress: student.companyaddress,
          companynumber: student.companynumber,
          supervisor: student.supervisor,
          contactnumber: student.contactnumber,
          supervisoremail: student.supervisoremail,
          designation: student.designation,
          department: student.department,
          studentEnrolled: 1,
          ids: [student.id],
          studentInfos: [studentInfo], // Initialize with current student info
        });
      }
    });

    return companies;
  }

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
    return meta_data.companyname.toLowerCase().includes(search);
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
            <h1 className="text-[35px] font-semibold">Company</h1>
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
        </div>
      </div>
    </>
  );
};

export default Company;
