import { Suspense, useState } from "react";
import Header from "./layout/header/Header";

import Footer from "./layout/footer/Footer";
import LoginForm from "./layout/header/loginform/LoginForm";
import { lazy } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Content = lazy(() => import("./layout/content/Content"));
const Sidebar = lazy(() => import("./layout/sidebar/Sidebar"));

function App() {
  const [isOpenLogin, setOpenLogin] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <main className="overflow-hidden h-screen w-screen select-none bg-slate-200">
      <LoginForm
        setOpenLogin={setOpenLogin}
        isOpenLogin={isOpenLogin}
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
      />
      <header className="w-screen bg-slate-400">
        <Header
          setOpenLogin={setOpenLogin}
          isOpenLogin={isOpenLogin}
          isLoggedIn={isLoggedIn}
        />
      </header>
      {!isLoggedIn ? (
        ""
      ) : (
        <Suspense fallback="Loading...">
          <aside className="SecondColor h-full w-[200px]">
            <Sidebar />
          </aside>
          <article className="h-full  ">
            <Content />
          </article>
        </Suspense>
      )}
      <footer className="bg-slate-600">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
