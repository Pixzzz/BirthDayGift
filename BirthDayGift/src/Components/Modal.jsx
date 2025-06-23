import CloseIcon from "@mui/icons-material/Close";
export const Modal = ({ isOpen, OnClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm bg-black/30 Z-50 animate-fade">
        <div className="bg-white w-full max-w-lg h-9/12">
          <button
            onClick={OnClose}
            className="cursor-pointer p-3 Z-50 flex text-pink-400"
          >
            <CloseIcon />
          </button>
          <p className="text-center font-semibold text-lg p-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </>
  );
};
