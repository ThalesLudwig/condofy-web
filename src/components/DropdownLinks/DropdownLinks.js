import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Container, Dropdown } from "./DropdownLinksStyled";

const DropdownLinks = ({ isOpen, openButton, onClose, children }) => {
  const ContainerRef = useRef(null);

  useClickOutside(
    ContainerRef,
    () => {
      onClose();
    },
    ["post-dropdown-button"],
  );

  return (
    <Container ref={ContainerRef}>
      {openButton}
      {isOpen && <Dropdown>{children}</Dropdown>}
    </Container>
  );
};

DropdownLinks.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openButton: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default DropdownLinks;
