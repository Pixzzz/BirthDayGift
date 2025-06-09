import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <body className="bg-pink-400 overflow-hidden">
        <div className="flex flex-col items-center justify-center h-screen -mt-10">
          <img
          src="src/assets/pngegg (1).png"
          alt=""
          className="h-40 lg:h-50"
        />
          <h1 className="text-white font-semibold text-5xl text-center">
            <p className="md:transition-all">
              HAPPY BIRTHDAY LIIIIIIIIIIIIIIIIII
            </p>
            <p className="text-lg">Hola, enana epero' que guste el regalo <span className="text-emerald-200 font-bold">{'<3'}</span></p>
          </h1>
          <button className=" mt-5 drop-shadow-md bg-white px-8 py-3 rounded-xl text-yellow-500 font-semibold cursor-pointer transition duration-300 ease-in-out  hover:scale-110  hover:text-pink-400 ">
            <p>Press here!</p>
          </button>
        </div>
        
        <p className="text-white font-semibold text-xl p-2">
          Pi love ya ♡
        </p>
      </body>
    </>
  );
}

export default App;
