import React, { useState } from "react";
import Modal from "../../component/modal/Modal";
import ProgressChecker from "../progressChecker/ProgressChecker";
import { FaBoxArchive } from "react-icons/fa6";
const DataConfig = ({ meta_data, datafrom }) => {
  const [openModal, setopenModal] = useState(false);
  return (
    <>
      <div
        key={meta_data.id}
        className="text-white MainColor gap-2 flex items-center p-2  rounded-md mt-1 hover:py-4 hover:shadow-md  duration-300 justify-between px-2 "
      >
        <div
          onClick={() => setopenModal(!openModal)}
          className="truncate ... overflow-hidden active:text-blue-500 cursor-pointer hover:underline hover:underline-offset-4  "
        >
          {meta_data.name}
        </div>
        <div className="truncate ... overflow-hidden">{meta_data.course}</div>
        <div className="flex gap-2">
          {datafrom === "masterlist" ? (
            <ProgressChecker
              progress={meta_data.ojtprogress}
              maxprogress={meta_data.ojtrequiredprogress}
            />
          ) : (
            <div className="flex items-center gap-x-2">
              <span>{meta_data.ojtprogress}</span> |
              <span>{meta_data.ojtrequiredprogress}</span>
              <FaBoxArchive className="hover:text-blue-500 hover:text-[20px] active:text-[18px] divide-red-300 cursor-pointer " />
            </div>
          )}
        </div>
      </div>
      <Modal
        openModal={openModal}
        setopenModal={setopenModal}
        data={meta_data}
        datafrom={datafrom}
      />
    </>
  );
};

export default DataConfig;
