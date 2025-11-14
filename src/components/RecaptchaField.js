import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { RECAPTCHA_CONFIG } from "../config/recaptcha";

const RecaptchaContainer = styled.div`
  margin: ${(props) => props.theme.spacing.md} 0;
  display: flex;
  justify-content: center;
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 14px;
  margin-top: ${(props) => props.theme.spacing.xs};
  display: block;
  text-align: center;
`;

const RecaptchaField = ({ value, onChange, error }) => {
  return (
    <>
      <RecaptchaContainer>
        <ReCAPTCHA sitekey={RECAPTCHA_CONFIG.siteKey} onChange={onChange} />
      </RecaptchaContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default RecaptchaField;
