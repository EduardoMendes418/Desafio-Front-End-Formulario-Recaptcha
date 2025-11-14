import React from "react";
import styled from "styled-components";

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

  &:disabled {
    background: ${(props) => props.theme.colors.secondary};
    cursor: not-allowed;
  }
`;

const SubmitButton = ({ submitting, children, ...props }) => {
  return (
    <Button disabled={submitting} {...props}>
      {submitting ? "Enviando..." : children}
    </Button>
  );
};

export default SubmitButton;
