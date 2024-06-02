import { Suspense, useEffect, useState, useRef } from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import LoginForm from "./layout/header/loginform/LoginForm";
import { lazy } from "react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Content = lazy(() => import("./layout/content/Content"));
const Sidebar = lazy(() => import("./layout/sidebar/Sidebar"));

function App({ socket }) {
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState();
  const [userData, setUserData] = useState();
  const text = "WELCOME TO iMONITOR";
  const [openSideBar, setopenSideBar] = useState(true);

  const detectDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 700) {
      // Adjust the width threshold as needed
      setopenSideBar(true);
    } else {
      setopenSideBar(false);
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

  useEffect(() => {
    const currentUser = JSON.parse(window.localStorage.getItem("CurrentUser"));
    if (
      currentUser?.username === "tester1" ||
      currentUser?.username === "tester2"
    ) {
      setLoggedIn(true);
      setUserData(currentUser);
    }
  }, []);

  const sideBarRef = useRef(null);

  const handleClickOutside = (event) => {
    const width = window.innerWidth;
    if (
      sideBarRef.current &&
      !sideBarRef.current.contains(event.target) &&
      width <= 700
    ) {
      setopenSideBar(true);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="overflow-hidden h-screen w-screen  select-none background">
      <LoginForm
        setOpenLogin={setOpenLogin}
        isOpenLogin={isOpenLogin}
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
        setUserData={setUserData}
        userData={userData}
      />
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="w-screen bg-slate-400 h-[60px]"
      >
        <Header
          setOpenLogin={setOpenLogin}
          isOpenLogin={isOpenLogin}
          isLoggedIn={isLoggedIn}
          userData={userData}
          setopenSideBar={setopenSideBar}
          openSideBar={openSideBar}
        />
      </motion.header>

      {isLoggedIn ? (
        <Suspense fallback="Loading...">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className="flex h-full"
          >
            <aside className=" h-full  ">
              <Sidebar
                openSideBar={openSideBar}
                setopenSideBar={setopenSideBar}
                sideBarRef={sideBarRef}
              />
            </aside>
            <article className="h-full w-full ">
              <Content isLoggedIn={isLoggedIn} socket={socket} />
            </article>
          </motion.div>
        </Suspense>
      ) : (
        <div className="h-full w-full flex flex-col mt-[30vh] items-center text-[6vh] font-bold text-white gap-2  tracking-widest">
          <h1 className="bold text-[40px] mx-8 flex font-bold  tracking-[10px]">
            <motion.div className="text">
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70vh" }}
            transition={{ duration: 1, delay: 2 }}
            className="w-[70vh] h-[1px] bg-white"
          />
        </div>
      )}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="bg-slate-600 fixed w-full bottom-0"
      >
        <Footer />
      </motion.footer>
    </main>
  );
}

export default App;
