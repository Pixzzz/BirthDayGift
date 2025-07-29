import CloseIcon from "@mui/icons-material/Close";
export const Modal = ({ isOpen, OnClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 Z-50 animate-fade z-50">
        <div className="bg-white w-full max-w-lg h-9/12">
          <button
            onClick={OnClose}
            className="cursor-pointer p-3 Z-50 flex text-pink-400"
          >
            <CloseIcon />
          </button>
          <p className="text-center font-semibold text-lg p-10">
            Hola ser enano que rapté para que sea mi be fren, 1ro hapi verdi,
            espero que sigas cumpliendo muchos años de tu bella vida, agradecido
            toy' de tener como mi be fren y de las personas mas especiles que
            tengo, y que confio tamb lol, a pesar de la mrd que soy, sigue
            viviendo y cumpliendo ma' año de vida, si? Gracias. TE
            QUIEROOOOOOOOOOOOOOOOOOOOOOOOOOOO <br />
            <span className=" text-4xl">♡</span> <br /> (cuando cobre
            o pueda te doy tus robux)
          </p>
        </div>
      </div>
    </>
  );
};
