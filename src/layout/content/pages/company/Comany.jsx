import React from "react";
import { ToastContainer, toast } from "react-toastify";
const Comany = () => {
  const notify = () =>
    toast.success("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  return (
    <div>
      <button onClick={() => notify()}>notify</button>
      <ToastContainer />
    </div>
  );
};

export default Comany;
