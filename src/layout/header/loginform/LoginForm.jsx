import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import AzureLogin from "./component/AzureLogin";
const LoginForm = ({
  setOpenLogin,
  isOpenLogin,
  isLoggedIn,
  setLoggedIn,
  userData,
  setUserData,
}) => {
  const [isOpenAdmin, setOpenAdmin] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if (formData.username === "tester1" && formData.password === "tester1") {
      window.localStorage.setItem("CurrentUser", JSON.stringify(formData));
      window.location.reload();
      setLoggedIn(true);
      setUserData({ username: formData.username, password: formData.password });
      setOpenLogin(false);
    } else if (
      formData.username === "tester2" &&
      formData.password === "tester2"
    ) {
      window.localStorage.setItem("CurrentUser", JSON.stringify(formData));
      window.location.reload();
      setLoggedIn(true);
      setUserData({ username: formData.username, password: formData.password });
      setOpenLogin(false);
    } else {
      alert("Login Failed");
    }
  };

  if (!isOpenLogin) return;
  return (
    <div className="fixed inset-0 backdrop-blur-sm h-screen w-screen flex justify-center  pt-[7rem]">
      <div
        className={`flex flex-col relative rounded-md bg-slate-200 shadow-md shadow-slate-700 ${
          isOpenAdmin ? "h-[280px] w-[300px]" : "h-[190px] w-[300px] "
        } `}
      >
        <div className="flex justify-between p-2 MainColor rounded-t-md text-white">
          <span className="font-bold ">LOGIN</span>
          <a
            onClick={() => setOpenLogin(!isOpenLogin)}
            className="hover:text-red-500 cursor-pointer"
          >
            <IoClose className="text-[20px]" />
          </a>
        </div>
        {isOpenAdmin && (
          <div
            onClick={() => setOpenAdmin(!isOpenAdmin)}
            className="w-full p-2 absolute mt-10 top-0 MainColor text-white font-thin hover:bg-opacity-95 cursor-pointer"
          >
            Login as Student
          </div>
        )}

        <div className=" w-full flex flex-col items-center pt-8 px-4 text-white  ">
          {!isOpenAdmin ? (
            <div
              onClick={() => AzureLogin(setLoggedIn, setOpenLogin)}
              className="bg-[#d33f3f] hidden hover:bg-opacity-90 cursor-pointer px-4 py-1 text-[15px] font-semibold rounded-md  items-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                fill="white"
                viewBox="0 0 50 50"
              >
                <path d="M43 11.11v27.6c0 2.54-1.73 4.77-4.21 5.43l-8.63 2.41c.5-.94.78-2.02.78-3.16V5.65c0-.86-.19-1.68-.53-2.42l8.45 2.47C41.29 6.37 43 8.6 43 11.11zM28.94 37v6.39c0 1.99-1.19 3.72-2.96 4.33-.43.1-.87.15-1.31.15-1 0-2-.26-2.92-.76L13.45 42c-1.04-.64-1.52-1.86-1.19-3.04.33-1.17 1.38-1.96 2.6-1.96H28.94zM28.94 5.65v5.72l-10.28 3.64c-.99.36-1.66 1.3-1.66 2.36v13.36c0 1.09-.59 2.1-1.54 2.62l-4.07 2.27C10.94 35.88 10.44 36 9.95 36c-.51 0-1.03-.14-1.49-.41C7.54 35.05 7 34.1 7 33.05V14.83c0-1.93 1.04-3.72 2.72-4.68L22.8 2.71c1.08-.61 2.28-.83 3.45-.65.07.06.16.11.26.14C27.72 2.6 28.94 3.82 28.94 5.65z"></path>
              </svg>
              LOGIN WITH OFFICE 365
            </div>
          ) : (
            <div className="space-y-2 mt-10 text-black">
              <input
                required
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="Enter Username"
                className="p-2 w-full rounded-md"
              />
              <input
                required
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Enter Password"
                className="p-2 w-full rounded-md"
              />
              <button
                onClick={() => handleLogin()}
                className="w-full flex items-center text-white justify-center p-2 MainColor rounded-md hover:opacity-85"
              >
                LOGIN
              </button>
            </div>
          )}
        </div>
        {!isOpenAdmin && (
          <div
            onClick={() => setOpenAdmin(!isOpenAdmin)}
            className="w-full p-2 absolute bottom-0 MainColor rounded-b-md text-white font-thin hover:bg-opacity-95 cursor-pointer"
          >
            Login as Admin
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
