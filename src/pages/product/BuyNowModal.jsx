/* eslint-disable react/prop-types */
import Modal from "react-modal";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(128, 128, 128, 0.5)", // Adjust the alpha value for transparency
  },
  content: {
    width:"360px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff", // Set the modal background color
  },
};

export default function BuyNowModal({
  isOpen,
  setIsOpen,
  onSubmitHandler
}) {
  let subtitle;
  const afterOpenModal = () => {
    subtitle.style.color = "#fff";
  };
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold">Buy Product</h1>
          <p className="text-center  text-gray-700 font-semibold text-lg mb-4">
           Are you sure you want to buy this product now ?
          </p>
          <div className="grid grid-cols-2 w-full gap-2 text-white h-9  mt-4">
            <button
              onClick={() => setIsOpen(false)}
              className={"bg-red-500 hover:opacity-80 "}
            >
                Cancel
                </button>

                <button
                onClick={()=>onSubmitHandler()}
              className={"bg-[#FA8232]  hover:opacity-80 "}
            >
                Buy Now
                </button>
          </div>
          </div>
      </Modal>
    </div>
  );
}