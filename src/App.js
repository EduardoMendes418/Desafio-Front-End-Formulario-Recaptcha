import React from "react";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import store from "./store/store";
import theme, { darkTheme } from "./theme/theme";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ThemeToggle";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts.main};
  }
  
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    transition: all 0.3s ease;
  }
  
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  h1 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

function AppContent() {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <ThemeProvider theme={currentTheme === "light" ? theme : darkTheme}>
      <GlobalStyle />
      <ThemeToggle />
      <div className="app-container">
        <h1>Formulário de Contato</h1>
        <ContactForm />
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
