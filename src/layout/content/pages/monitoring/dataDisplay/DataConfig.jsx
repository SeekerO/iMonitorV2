import React, { useState } from "react";
import Modal from "../../component/modal/Modal";
const DataConfig = ({ monitoring_meta_data }) => {
  const [openModal, setopenModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setopenModal(!openModal)}
        key={monitoring_meta_data.id}
        className="text-white MainColor gap-2 flex items-center p-2  rounded-md mt-1 hover:scale-x-105 hover:shadow-md hover:scale-y-110 duration-300 cursor-pointer active:bg-opacity-25 justify-between px-2"
      >
        <div className="truncate ... overflow-hidden">
          {monitoring_meta_data.name}
        </div>
        <div className="truncate ... overflow-hidden">
          {monitoring_meta_data.course}
        </div>
        <div className="flex gap-2">
          <span>{monitoring_meta_data.ojtprogress}</span> |
          <span>{monitoring_meta_data.ojtrequiredprogress}</span>
        </div>
      </div>
      <Modal
        openModal={openModal}
        setopenModal={setopenModal}
        data={monitoring_meta_data}
      />
    </>
  );
};

export default DataConfig;
