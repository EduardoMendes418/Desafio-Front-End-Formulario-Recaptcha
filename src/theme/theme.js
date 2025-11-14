const theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    background: "#ffffff",
    text: "#212529",
    inputBackground: "#ffffff",
    inputBorder: "#ced4da",
  },
  fonts: {
    main: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: "4px",
  shadows: {
    small: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    medium: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: "#121212",
    text: "#ffffff",
    inputBackground: "#2d2d2d",
    inputBorder: "#444444",
  },
};

export default theme;
