export const ButtonCard = ({ text, Onclick }) => {
  return (
    <>
    <div className="">
        <div className=" h-30 w-65 bg-white rounded-sm">
          <div className="items-center absolute w-65 border-solid rounded-t-sm  border-transparent border-90 border-t-pink-200 z-20"/>
          <div className='items-center absolute w-65 border-solid rounded-b-sm border-transparent border-60 border-b-pink-100 z-10' />
          <div className="flex flex-col items-center justify-center h-30">
            <button
        onClick={Onclick}
        className="z-50 mt-5 drop-shadow-md bg-white px-8 py-3 rounded-xl text-pink-500 font-semibold cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:bg-pink-400 hover:text-white"
      >
        <p>{text}</p>
      </button>
          </div>
        </div>
    </div>

    
    </>
  );
};
