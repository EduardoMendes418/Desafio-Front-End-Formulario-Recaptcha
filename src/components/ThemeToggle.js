import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/store";
import styled from "styled-components";

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: ${(props) => props.theme.shadows.medium};
  z-index: 1000;
`;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <ToggleButton onClick={() => dispatch(toggleTheme())}>
      {currentTheme === "light" ? "🌙" : "☀️"}
    </ToggleButton>
  );
};

export default ThemeToggle;
