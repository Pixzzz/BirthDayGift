import { Modal } from "./Components/Modal";
import { ButtonCard } from "./Components/ButtonCard";
import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const OpenModal = () => {
    setIsOpen(true);
  };
  const OnCloseModal = () => {
    setIsOpen(false);
  };
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
            <p className="text-lg">
              Hola, enana epero' que guste el regalo{" "}
              <span className="text-emerald-200 font-bold">{"<3"}</span>
            </p>
          </h1>
          {/* <button
            onClick={OpenModal}
            className=" mt-5 drop-shadow-md bg-white px-8 py-3 rounded-xl text-yellow-500 font-semibold cursor-pointer transition duration-300 ease-in-out  hover:scale-110  hover:text-pink-400 "
          >
            <p>Press here!</p>
          </button> */}
          <ButtonCard Onclick={OpenModal} text={'Abre la carta'}/>
          <Modal isOpen={isOpen} OnClose={OnCloseModal} />
        </div>
        <p className="text-white font-semibold text-xl p-2 animate-wiggle animate-infinite">
          Pi love ya ♡
        </p>
      </body>
    </>
  );
}

export default App;
