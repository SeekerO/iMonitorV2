import React, { useState } from "react";
import Modal from "../../component/modal/Modal";
import ProgressChecker from "../progressChecker/ProgressChecker";
const DataConfig = ({ meta_data, datafrom }) => {
  const [openModal, setopenModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setopenModal(!openModal)}
        key={meta_data.id}
        className="text-white MainColor gap-2 flex items-center p-2  rounded-md mt-1 hover:py-4 hover:shadow-md  duration-300 cursor-pointer active:bg-opacity-25 justify-between px-2"
      >
        <div className="truncate ... overflow-hidden">{meta_data.name}</div>
        <div className="truncate ... overflow-hidden">{meta_data.course}</div>
        <div className="flex gap-2">
          {datafrom === "masterlist" ? (
            <ProgressChecker
              progress={meta_data.ojtprogress}
              maxprogress={meta_data.ojtrequiredprogress}
            />
          ) : (
            <>
              <span>{meta_data.ojtprogress}</span> |
              <span>{meta_data.ojtrequiredprogress}</span>
            </>
          )}
        </div>
      </div>
      <Modal
        openModal={openModal}
        setopenModal={setopenModal}
        data={meta_data}
      />
    </>
  );
};

export default DataConfig;
