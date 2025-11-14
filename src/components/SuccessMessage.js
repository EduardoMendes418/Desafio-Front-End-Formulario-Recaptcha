import React from "react";
import styled from "styled-components";

const SuccessMessageContainer = styled.div`
  background: ${(props) => props.theme.colors.success};
  color: white;
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.2s;
  width: 100%;
  margin-top: ${(props) => props.theme.spacing.md};

  &:hover {
    background: #0069d9;
  }
`;

const SuccessMessage = ({ onReset }) => {
  return (
    <>
      <SuccessMessageContainer>
        Formulário enviado com sucesso! Obrigado pelo seu contato.
      </SuccessMessageContainer>
      <Button onClick={onReset}>Enviar Nova Mensagem</Button>
    </>
  );
};

export default SuccessMessage;
