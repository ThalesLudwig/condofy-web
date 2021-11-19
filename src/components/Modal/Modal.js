import React from "react";
import ReactModal from "react-modal";

export const Modal = ({ isOpen, onClose, children }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: 10,
    },
    overlay: {
      zIndex: 150,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      {children}
    </ReactModal>
  );
};
