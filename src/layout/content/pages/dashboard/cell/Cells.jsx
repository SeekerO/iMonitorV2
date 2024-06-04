import React from "react";

import { IoMdPersonAdd, IoIosTime } from "react-icons/io";
import { BsFillBuildingsFill } from "react-icons/bs";
import { CompanyFetcher } from "../../component/fetcher/dataFetchers";

const Cells = ({ data }) => {
  const all_company_data = CompanyFetcher();
  //   // 1st Company Filter - Get unique companies
  const uniqueCompanies = [
    ...new Set(all_company_data.map((student) => student.companyname)),
  ];
  const numberOfUniqueCompanies = uniqueCompanies.length;

  //   // 2nd Ongoing Filter - Count students with status false
  const ongoingStudentsCount = data.filter((student) => !student.status).length;

  const masterlist_data = filterOjtData(data);

  function filterOjtData(dataArray) {
    return dataArray.filter((data) => {
      return (
        data.ojtprogress <= data.ojtrequiredprogress && data.status === true
      );
    });
  }

  return (
    <div className="py-1 flex gap-2 justify-between flex-wrap">
      <div className="dashboard-cell flex flex-col gap-2 p-1 text-green-500">
        <label className="flex gap-1 w-full items-center font-bold  ">
          <IoMdPersonAdd />
          REGISTERED STUDENT
        </label>
        <label className="font-bold text-[25px]">{data.length}</label>
      </div>
      <div className="dashboard-cell flex flex-col gap-2 p-1 text-yellow-400">
        <label className="flex gap-1 w-full items-center font-bold  ">
          <IoIosTime />
          ONGOING OJT
        </label>
        <label className="font-bold text-[25px]">{ongoingStudentsCount}</label>
      </div>
      <div className="dashboard-cell flex flex-col gap-2 p-1 text-slate-500">
        <label className="flex gap-1 w-full items-center font-bold  ">
          <BsFillBuildingsFill />
          MASTERLIST
        </label>
        <label className="font-bold text-[25px]">
          {masterlist_data.length}
        </label>
      </div>
      <div className="dashboard-cell flex flex-col gap-2 p-1 text-blue-400">
        <label className="flex gap-1 w-full items-center font-bold ">
          <BsFillBuildingsFill />
          COMPANIES
        </label>
        <label className="font-bold text-[25px]">
          {numberOfUniqueCompanies}
        </label>
      </div>
    </div>
  );
};

export default Cells;