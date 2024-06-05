import React, { useState, useEffect } from "react";
import { TbMessage2Search } from "react-icons/tb";
import { IoVideocam, IoCall } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { SlOptions } from "react-icons/sl";
import { RiSendPlaneFill } from "react-icons/ri";
import CurrentCell from "./layoutcell/CurrentCell";
import MessageToCell from "./layoutcell/MessageToCell";

const Layout = ({
  messageTo,
  socket,
  openSideLayout,
  setopenSideLayout,
  deviceType,
  openLayout,
  handleOpenChat,
}) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const currentUser = JSON.parse(window.localStorage.getItem("CurrentUser"));
  const width = window.innerWidth;

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.username);
      socket.emit("user joined", currentUser.username);
    }

    // Listen for chat messages from the server
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // Listen for users connecting
    socket.on("user connected", (user) => {
      setUsers((prevUsers) => [
        ...prevUsers.filter((u) => u.id !== user.id),
        { ...user, status: "online" },
      ]);
    });

    // Listen for users disconnecting
    socket.on("user disconnected", (user) => {
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === user.id ? { ...u, status: "offline" } : u
        )
      );
    });

    // Clean up the effect
    return () => {
      socket.off("chat message");
      socket.off("user connected");
      socket.off("user disconnected");
    };
  }, [socket]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && username.trim()) {
      // Emit the chat message to the server with the username
      socket.emit("chat message", { user: username, text: message });
      setMessage("");
    }
  };

  return (
    <>
      {(openLayout || width >= 786) && (
        <div className="MainColor  text-white h-full w-full md:rounded-r-md rounded-md">
          {messageTo !== "" ? (
            <div className="flex flex-col h-full w-full ">
              {/* HEADER DISPLAY */}
              <div className="w-full flex items-center px-3 py-3 MainColor justify-between rounded-tr-md">
                <div className="flex items-center gap-1">
                  <IoIosArrowBack
                    onClick={handleOpenChat}
                    className="md:hidden text-[25px]"
                  />{" "}
                  <div class="relative flex-shrink-0 truncate ... overflow-hidden flex cursor-pointer">
                    <img
                      class="w-[40px] h-[40px] rounded-full"
                      src={messageTo.avatar}
                      alt={messageTo.id}
                      className="bg-slate-300 rounded-full"
                    />
                    <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-slate-300 dark:border-gray-800 rounded-full"></span>
                  </div>
                  <label className="text-ellipsis overflow-hidden ...">
                    {messageTo.name}
                  </label>
                </div>
                <div className="flex gap-4 items-center h-full">
                  <IoVideocam className="text-[1.4rem]" />
                  <IoCall className="text-[1.2rem]" />
                  <SlOptions
                    onClick={() => setopenSideLayout(!openSideLayout)}
                    className="rounded-full border-2 border-white p-1 text-[1.4rem] hover:text-blue-500 hover:border-blue-500 cursor-pointer"
                  />
                </div>
              </div>
              {/* MESSAGE DISPLAY */}
              <div className="h-full w-full bg-slate-200 overflow-auto px-4 py-1">
                <ul id="messages">
                  {messages.map((msg, index) => (
                    <div key={index} className="text-black">
                      {msg.user === currentUser?.username ? (
                        <CurrentCell message={msg.text} />
                      ) : (
                        <MessageToCell username={msg.user} message={msg.text} />
                      )}
                    </div>
                  ))}
                </ul>
              </div>
              {/* INPUT LAYOUT */}
              <form
                onSubmit={sendMessage}
                className="h-[10rem] w-full MainColor overflow-auto rounded-br-md flex items-center gap-3 px-6 py-2"
              >
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  autoComplete="off"
                  rows={3}
                  className="resize-none w-full rounded-md"
                />
                <button
                  type="submit"
                  className="hover:text-blue-600 cursor-pointer"
                >
                  <RiSendPlaneFill className="text-[2.5rem]" />
                </button>
              </form>
            </div>
          ) : (
            <div className="h-full w-full items-center flex justify-center">
              <span
                onClick={() => setopenLayout(!openLayout)}
                className="flex items-center text-[2rem] tracking-wider gap-1"
              >
                <TbMessage2Search className="text-[3rem]" />
                Select a message
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Layout;
