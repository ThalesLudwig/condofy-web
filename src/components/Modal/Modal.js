import React from "react";
import ReactModal from "react-modal";
import { withTheme } from "styled-components";
import { Hoverable } from "../Hoverable/Hoverable";
import { Content, Header, Close } from "./ModalStyled";

const Modal = ({ isOpen, onClose, theme, children }) => {
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
      backgroundColor: theme.CARD,
    },
    overlay: {
      zIndex: 150,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <Header>
        <Hoverable onClick={onClose}>
          <Close />
        </Hoverable>
      </Header>
      <Content>{children}</Content>
    </ReactModal>
  );
};

export default withTheme(Modal);
