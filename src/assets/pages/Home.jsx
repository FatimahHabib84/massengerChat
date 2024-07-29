import React from "react";
import "../../App.css";
import Message from "../message.png";
import Call from "../telephone.png";
import Dot from "../dots.png";
import Video from "../video.png";
import { useState } from "react";
function Home() {
  const [messageItemJohn, setMessageJohn] = useState();
  const [messageItemAmy, setMessageAmy] = useState();
  const [messageArray, setMessageArray] = useState([]);
  const [johnarr, setJohnarr] = useState([]);
  const [amyarr, setAmyarr] = useState([]);

  function handleClickJohn() {
    setMessageJohn(
      <li className="bg-green-800 rounded-full px-2 py-1 text-white w-fit text-start my-2 justify-self-start">
        {messageItemJohn.message}
      </li>
    );
    // setMessageAmy(<li className='bg-zinc-800 rounded-full px-2 py-1 text-white w-fit text-start my-2 justify-self-end'>{messageItemAmy}</li>)
    setMessageArray([
      ...messageArray,
      { message: messageItemJohn, username: "john" },
    ]);
    setJohnarr([...johnarr, { message: messageItemJohn, username: "john" }]);
    setMessageJohn("");
    // setMessageAmy("")
  }

  function handleClickAmy() {
    setMessageAmy(
      <li className="bg-green-800 rounded-full px-2 py-1 text-white w-fit text-start my-2 justify-self-start">
        {messageItemAmy.message}
      </li>
    );
    // setMessageJohn(<li className='bg-zinc-800 rounded-full px-2 py-1 text-white w-fit text-start my-2 justify-self-end'>{messageItemJohn}</li>)
    setMessageArray([
      ...messageArray,
      { message: messageItemAmy, username: "amy" },
    ]);
    setAmyarr([...amyarr, { message: messageItemAmy, username: "amy" }]);
    // setMessageJohn("")
    setMessageAmy("");
  }

  return (
    <div className="grid grid-cols-2 items-center h-screen max-sm:h-fit max-sm:grid-cols-1 bg-pink-50">
      {/* <h1 className='col-span-2 text-center text-black self-start font-bold text-xl py-1'>SweetTalk App</h1> */}
      {/* john */}
      <div className="mockup-phone border-pink-400 focus-within:border-pink-800 max-sm:col-span-2">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 justify-between mt-8 bg-[url(https://i.pinimg.com/564x/c9/11/8a/c9118a33325a77be42ceca674518ec18.jpg)] bg-top">
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full py-2 px-4 gap-2 items-center text-start text-black rounded-t-2xl flex flex-row bg-pink-400">
                <img
                  src="https://i.pinimg.com/564x/af/26/81/af2681c32263c7eeeeb07a32fd964d23.jpg"
                  className="w-8 h-8 rounded-full"
                />
                <p className="justify-self-start text-start">John</p>
                <div className="flex flex-row gap-2 items-center justify-end w-full">
                  <img className="w-4 h-4" src={Video} />
                  <img className="w-4 h-4" src={Call} />
                  <img className="w-4 h-4" src={Dot} />
                </div>
              </div>
              <ul className="px-2 grid w-full text-wrap break-all max-h-[450px] overflow-y-scroll">
                {messageArray.map((item) => {
                  if (item.username == "john") {
                    // console.log(johnarr+" "+amyarr);
                    return (
                      <li className="bg-pink-100 rounded-2xl px-2 py-1 text-black w-fit text-start my-2 justify-self-start">
                        {item.message}
                        <span className="text-sm text-gray-500 text-end ml-4">
                          {Date().split(" ")[4]}
                        </span>
                      </li>
                    );
                  } else {
                    return (
                      <li className="bg-zinc-100 rounded-2xl px-2 py-1 text-black w-fit text-start my-2 justify-self-end">
                        {item.message}
                        <span className="text-sm text-gray-500 text-end ml-4">
                          {Date().split(" ")[4]}
                        </span>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="flex w-full justify-between px-2 mb-4 gap-2">
              <input
                type="text"
                value={messageItemJohn}
                className="w-full rounded-full px-2 bg-zinc-100 caret-pink-500 focus:text-black"
                placeholder="message"
                onChange={(e) => {
                  setMessageJohn(e.target.value);
                }}
              />
              <button
                className="btn w-12 self-end rounded-full bg-pink-400 hover:bg-pink-700 border-pink-400 hover:border-pink-700"
                onClick={() => {
                  handleClickJohn();
                }}
              >
                <img src={Message} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Amy */}
      <div className="mockup-phone border-pink-400 focus-within:border-pink-800">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 justify-between mt-8 w-full bg-[url(https://i.pinimg.com/564x/05/7a/19/057a19392e8288a53c5833116edae3ba.jpg)] bg-top">
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full py-2 px-4 gap-2 items-center text-start text-black rounded-t-2xl flex flex-row bg-pink-400">
                <img
                  src="https://i.pinimg.com/564x/3a/74/4e/3a744e35a7589a7c7800186336d22462.jpg"
                  className="w-8 h-8 rounded-full"
                />
                <p className="justify-self-start text-start text-black">Amy</p>
                <div className="flex flex-row gap-2 items-center justify-end w-full">
                  <img className="w-4 h-4" src={Video} />
                  <img className="w-4 h-4" src={Call} />
                  <img className="w-4 h-4" src={Dot} />
                </div>
              </div>
              <ul className="px-2 grid w-full text-wrap break-all max-h-[450px] overflow-y-scroll">
                {messageArray.map((item) => {
                  if (item.username == "amy") {
                    return (
                      <li className="bg-pink-100 rounded-2xl px-2 py-1 text-black w-fit text-start my-2 justify-self-start">
                        {item.message}
                        <span className="text-sm text-gray-500 text-end ml-4">
                          {Date().split(" ")[4]}
                        </span>
                      </li>
                    );
                  } else {
                    return (
                      <li className="bg-zinc-100 rounded-2xl px-2 py-1 text-black w-fit text-start my-2 justify-self-end">
                        {item.message}
                        <span className="text-sm text-gray-500 text-end ml-4">
                          {Date().split(" ")[4]}
                        </span>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <div className="flex w-full justify-between px-2 mb-4 gap-2">
              <input
                type="text"
                value={messageItemAmy}
                className="w-full rounded-full px-2 bg-zinc-100 caret-pink-500 focus:text-black"
                placeholder="message"
                onChange={(e) => {
                  setMessageAmy(e.target.value);
                }}
              />
              <button
                className="btn w-12 self-end rounded-full bg-pink-400 hover:bg-pink-700 border-pink-400 hover:border-pink-700"
                onClick={() => {
                  handleClickAmy();
                }}
              >
                <img src={Message} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center self-end col-span-2 text-zinc-500">
        Copyright © 2024 - All right reserved By Fatimah Habib
      </p>
    </div>
  );
}

export default Home;
