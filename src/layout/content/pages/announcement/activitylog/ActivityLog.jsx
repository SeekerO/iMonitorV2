import React, { useState } from "react";
import SearchBar from "../../component/searchbar/SearchBar";

const ActivityLog = () => {
  const MockDateActivityLog = [
    {
      name: "Isa Ayling",
      activity: "Opened Announcement 1",
      date: "2024-02-01 2:00 pm",
    },
    {
      name: "Melesa MacCaffery",
      activity: "Opened Announcement 1",
      date: "2024-02-01 2:00 pm",
    },
    {
      name: "Abdel Mees",
      activity: "Opened Announcement 1",
      date: "2024-02-01 2:00 pm",
    },
    {
      name: "Beverly Petrulis",
      activity: "Uploaded In Announcement 1",
      date: "2024-02-01 2:00 pm",
    },
    {
      name: "Aldin Walduck",
      activity: "Opened Announcement 1",
      date: "2024-02-01 2:00 pm",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = MockDateActivityLog?.filter((meta_data) => {
    const search = searchTerm.toLowerCase();
    return meta_data.name.toLowerCase().includes(search);
  });

  return (
    <div className="px-2 w-full">
      <div className="w-full h-[88vh] bg-slate-100 bg-opacity-50 rounded-md px-2 flex flex-col">
        <div className="flex gap-2 mt-2 mb-2">
          <h1 className="text-white font-semibold text-[30px] flex shrink-0">
            ACTIVTIY LOG
          </h1>
          <SearchBar
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        </div>
        <div className="grid grid-cols-3 MainColor px-1 py-2 text-white rounded-md mb-2 font-semibold">
          <div className="">
            <span>NAME</span>
          </div>
          <div className="text-center">
            <span>ACTIVITY</span>
          </div>
          <div className="text-center">
            <span>DATE</span>
          </div>
        </div>
        <div className="h-full w-full flex flex-col overflow-auto ">
          {filteredData.map((_meta_data, index) => (
            <div
              key={index}
              className="grid grid-cols-3 MainColor px-2 w-full mt-1 h-fit py-2 rounded-md text-white"
            >
              <span>{_meta_data.name}</span>
              <span className="text-center">{_meta_data.activity}</span>
              <span className="text-center">{_meta_data.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
