import React, { useState } from "react";
import Modal from "../modalCompany/Modal";

const DataConfig = ({ meta_data }) => {
  const [openModal, setopenModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setopenModal(!openModal)}
        className="text-white MainColor gap-2 flex items-center p-2  rounded-md mt-1 hover:py-4 hover:shadow-md  duration-300 cursor-pointer active:bg-opacity-25 justify-between px-2"
      >
        <div>{meta_data.companyname}</div>
        <div>{meta_data.companyaddress}</div>
        <div className="mr-10">{meta_data.studentEnrolled}</div>
      </div>
      <Modal
        openModal={openModal}
        setopenModal={setopenModal}
        meta_data={meta_data}
      />
    </>
  );
};

export default DataConfig;
