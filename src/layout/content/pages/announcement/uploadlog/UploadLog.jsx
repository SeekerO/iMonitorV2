import React, { useState } from "react";
import { motion } from "framer-motion";
const UploadLog = () => {
  const [showAnnouncement, setshowAnnouncement] = useState(false);
  const [Announcement_clickedData, setAnnouncement_clickedData] = useState([]);
  const MockData = [
    {
      title: "Announcement 1",
      date: "2024-10-01 11:59am",
      announcement: `We are excited to improve our recycling program! By improving recycling, we will help keep our
community clean and green. Did you know most of the materials that fill up our landfill are recyclable?!"
These Items include paper, cardboard, plastic bottles and jugs, metal cans, glass bottles and jars and
carton containers.`,
      created_by: "Prof. Dela Cruz",
      student_uploads: [
        {
          name: "Beverly Petrulis",
          activity: "Uploaded In Announcement 1",
          date: "2024-02-01 2:00 pm",
        },
      ],
    },
  ];

  const handleClickedAnnouncement = (data) => {
    if (showAnnouncement) {
      setAnnouncement_clickedData([]);
      setshowAnnouncement(false);
      return;
    }
    setshowAnnouncement(!showAnnouncement);
    setAnnouncement_clickedData([data]);
  };

  return (
    <div className="px-2 w-full">
      <div className="w-full h-[88vh] rounded-md bg-slate-100 bg-opacity-50 px-2 flex flex-col">
        <div className="flex gap-2 w-full h-full mb-2 mt-2">
          <div className="w-full h-full  flex flex-col rounded-md">
            <h1 className="px-2 font-semibold text-[30px] text-white mb-2">
              UPLOADED ANNOUNCEMENT
            </h1>
            <div className="h-full w-full px-2">
              {MockData.map((_meta_data, index) => (
                <div
                  onClick={() => handleClickedAnnouncement(_meta_data)}
                  key={index}
                  className={`px-2 bg-slate-100 rounded-md flex flex-col  overflow-hidden w-full h-[100px] cursor-pointer`}
                >
                  <div className="flex gap-2 items-center justify-between ">
                    <span className="text-[25px] font-bold">
                      {_meta_data.title}
                    </span>
                    <span className="text-[13px]">{_meta_data.date}</span>
                  </div>
                  <span className="font-thin mb-2">
                    Created By: {_meta_data.created_by}
                  </span>
                  <span className="font-semibold">Announcement:</span>
                  <p className="text-clip overflow-hidden ... mb-2">
                    {_meta_data.announcement}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full flex flex-col p-2 border-s-2 border-gray-500">
            {Announcement_clickedData.length === 0 && (
              <div className="h-full w-full justify-center  flex">
                <span className="font-semibold mt-[10rem]">
                  CLICK ANNOUNCEMENT TO VIEW{" "}
                </span>
              </div>
            )}
            {Announcement_clickedData?.map((_meta_data, index) => (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 0.5 }}
                key={index}
                className="flex flex-col w-full  bg-slate-200 px-2 rounded-md overflow-hidden"
              >
                <div className="flex gap-2 items-center justify-between ">
                  <span className="text-[25px] font-bold">
                    {_meta_data.title}
                  </span>
                  <span className="text-[13px]">{_meta_data.date}</span>
                </div>
                <span className="font-thin mb-2">
                  Created By: {_meta_data.created_by}
                </span>
                <p className="text-clip overflow-hidden ... mb-5">
                  {_meta_data.announcement}
                </p>
                <h1 className="font-semibold">STUDENT UPLOADED</h1>
                <div className="mt-1">
                  {_meta_data?.student_uploads.map((stud_data, index) => (
                    <div
                      key={index}
                      className="MainColor px-2 text-white rounded-md cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[17px]">
                          {stud_data.name}
                        </span>
                        <span className="font-thin text-[13px]">
                          {stud_data.date}
                        </span>
                      </div>
                      <div className="flex ">
                        <span>
                          LINK:{" "}
                          <em className="underline text-blue-500 underline-offset-1">
                            TestLink_NO_REDIRECT
                          </em>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadLog;
