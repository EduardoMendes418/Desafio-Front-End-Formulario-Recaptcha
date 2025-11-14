import React from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: ${(props) => props.theme.spacing.sm};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.inputBackground};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  ${(props) =>
    props.hasError &&
    `
    border-color: ${props.theme.colors.danger};
    box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
  `}
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${(props) => props.theme.spacing.sm};
  border: 1px solid ${(props) => props.theme.colors.inputBorder};
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.colors.inputBackground};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  ${(props) =>
    props.hasError &&
    `
    border-color: ${props.theme.colors.danger};
    box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
  `}
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 14px;
  margin-top: ${(props) => props.theme.spacing.xs};
  display: block;
`;

const FormField = ({
  label,
  type = "text",
  value,
  onChange,
  error,
  multiline = false,
  ...props
}) => {
  const InputComponent = multiline ? TextArea : Input;

  return (
    <FormGroup>
      <Label htmlFor={props.id}>{label}</Label>
      <InputComponent
        type={type}
        value={value}
        onChange={onChange}
        hasError={!!error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormGroup>
  );
};

export default FormField;
