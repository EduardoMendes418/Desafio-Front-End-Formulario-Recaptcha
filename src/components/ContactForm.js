import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  updateField,
  setErrors,
  setSubmitting,
  setSuccess,
  resetForm,
} from "../store/store";

import FormField from "./FormField";
import RecaptchaField from "./RecaptchaField";
import SuccessMessage from "./SuccessMessage";
import SubmitButton from "./SubmitButton";

const FormContainer = styled.div`
  max-width: 500px;
  width: 100%;
  background: ${(props) => props.theme.colors.inputBackground};
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.shadows.medium};
  margin-top: ${(props) => props.theme.spacing.lg};
`;

const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-size: 14px;
  margin-top: ${(props) => props.theme.spacing.xs};
  display: block;
  text-align: center;
`;

const ContactForm = () => {
  const dispatch = useDispatch();
  const { formData, errors, isSubmitting, isSuccess } = useSelector(
    (state) => state.form
  );
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Nome deve ter pelo menos 2 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mensagem deve ter pelo menos 10 caracteres";
    }

    if (!recaptchaValue) {
      newErrors.recaptcha = "Por favor, confirme que você não é um robô";
    }

    return newErrors;
  };

  const handleChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      dispatch(setErrors(validationErrors));
      return;
    }

    dispatch(setSubmitting(true));

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(setSuccess(true));
      setRecaptchaValue(null);
    } catch (error) {
      dispatch(
        setErrors({ submit: "Erro ao enviar formulário. Tente novamente." })
      );
    } finally {
      dispatch(setSubmitting(false));
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
    setRecaptchaValue(null);
  };

  return (
    <FormContainer>
      {isSuccess ? (
        <SuccessMessage onReset={handleReset} />
      ) : (
        <form onSubmit={handleSubmit}>
          <FormField
            label="Nome"
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            error={errors.name}
          />

          <FormField
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            error={errors.email}
          />

          <FormField
            label="Mensagem"
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            error={errors.message}
            multiline={true}
          />

          <RecaptchaField
            value={recaptchaValue}
            onChange={setRecaptchaValue}
            error={errors.recaptcha}
          />

          {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}

          <SubmitButton type="submit" submitting={isSubmitting}>
            Enviar Mensagem
          </SubmitButton>
        </form>
      )}
    </FormContainer>
  );
};

export default ContactForm;
