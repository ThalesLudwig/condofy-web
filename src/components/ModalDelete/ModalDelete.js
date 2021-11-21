import React from "react";
import Modal from "../Modal/Modal";
import { Button } from "../Button/Button";
import { FiTrash2 } from "react-icons/fi";
import { withTheme } from "styled-components";
import { useIntl } from "react-intl";
import { Container, Image, Title, Text, ButtonRow } from "./ModalDeleteStyled";
import localization from "./localization";

const ModalDelete = ({ isOpen, onClose, onDelete, theme }) => {
  const { formatMessage } = useIntl();

  const onDeleteAction = () => {
    onDelete();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <Image />
        <Title>{formatMessage(localization.title)}</Title>
        <Text>{formatMessage(localization.text)}</Text>
        <ButtonRow>
          <Button isOutlined onPress={onClose} text={formatMessage(localization.cancel)} />
          <Button
            icon={FiTrash2}
            onPress={onDeleteAction}
            text={formatMessage(localization.delete)}
            color={theme.LIKE_RED}
            isAlwaysColored
          />
        </ButtonRow>
      </Container>
    </Modal>
  );
};

export default withTheme(ModalDelete);
