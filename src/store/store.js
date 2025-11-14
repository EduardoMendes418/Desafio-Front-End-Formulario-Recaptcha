import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "light",
  },
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
    },
  },
});

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: {
      name: "",
      email: "",
      message: "",
    },
    errors: {},
    isSubmitting: false,
    isSuccess: false,
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
      if (state.errors[field]) {
        delete state.errors[field];
      }
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    resetForm: (state) => {
      state.formData = { name: "", email: "", message: "" };
      state.errors = {};
      state.isSuccess = false;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const { updateField, setErrors, setSubmitting, setSuccess, resetForm } =
  formSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    form: formSlice.reducer,
  },
});

export default store;
