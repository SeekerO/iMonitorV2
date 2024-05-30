import { Suspense, useEffect, useState } from "react";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import LoginForm from "./layout/header/loginform/LoginForm";
import { lazy } from "react";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Content = lazy(() => import("./layout/content/Content"));
const Sidebar = lazy(() => import("./layout/sidebar/Sidebar"));

function App() {
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();
  const text = "WELCOME TO iMONITOR";

  useEffect(() => {
    const currentUser = JSON.parse(window.localStorage.getItem("CurrentUser"));
    if (currentUser?.username === "tester1") {
      setLoggedIn(true);
      setUserData(currentUser);
    }
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
        />
      </motion.header>

      {isLoggedIn ? (
        <Suspense fallback="Loading...">
          <div className="flex h-full">
            <aside className="SecondColor h-full w-[200px] ">
              <Sidebar />
            </aside>
            <article className="h-full w-full ">
              <Content isLoggedIn={isLoggedIn} />
            </article>
          </div>
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
