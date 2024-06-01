import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaChartPie } from "react-icons/fa";
import TableCompany from "./table/TableCompany";
import ChartCompany from "./chart/ChartCompany";
import { FaTableColumns } from "react-icons/fa6";

const Company = ({ company_data }) => {
  const data = countStudentsByCompany(company_data);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCriteria, setSortCriteria] = useState({ field: "", order: "" });
  const [isTable, setTable] = useState(false);
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

  const [deviceType, setDeviceType] = useState(true);

  const detectDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 700) {
      // Adjust the width threshold as needed
      setDeviceType(false);
    } else {
      setDeviceType(true);
    }
  };
  useEffect(() => {
    detectDeviceType(); // Initial check
    window.addEventListener("resize", detectDeviceType);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", detectDeviceType);
    };
  }, []);

  return (
    <>
      <div className="px-5 w-full">
        <div className="w-full h-[88dvh] overflow-auto bg-slate-300  rounded-md  backdrop-blur-lg bg-opacity-40 shadow-2xl shadow-slate-800 text-white p-4">
          <div className="flex gap-2 h-fit w-full">
            <h1 className="text-[35px] font-semibold">Company</h1>
            <div
              className={`${
                isTable ? "w-0" : "w-full"
              } flex items-center gap-1 bg-white rounded-md text-black px-2 duration-300`}
            >
              <CiSearch className="text-[25px] text-slate-400 h-[20px]" />
              <div className="w-[1px] h-[30px] bg-slate-300 ml-2" />
              <input
                type="search"
                placeholder="Search by company name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="text-black  rounded-md w-full px-2 outline-white"
              />
            </div>
            <div
              onClick={() => setTable(!isTable)}
              className="justify-center flex items-center bg-white px-4 rounded-md group cursor-pointer"
            >
              {isTable ? (
                <FaTableColumns className="text-[20px] text-red-800 group-hover:shadow-md group-hover:text-blue-500 group-hover:scale-110 group-active:scale-95 group-hover:duration-300" />
              ) : (
                <FaChartPie className="text-[20px] text-red-800 group-hover:shadow-md group-hover:text-blue-500 rounded-full group-hover:scale-110 group-active:scale-95 group-hover:duration-300" />
              )}
            </div>
          </div>
          {!isTable ? (
            <TableCompany
              currentData={currentData}
              handleSortChange={handleSortChange}
              itemsPerPage={itemsPerPage}
              sortedData={sortedData}
              handlePageChange={handlePageChange}
            />
          ) : (
            <ChartCompany data={data} deviceType={deviceType} />
          )}
        </div>
      </div>
    </>
  );
};

export default Company;
