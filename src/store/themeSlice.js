import { createSlice } from "@reduxjs/toolkit";
import { THEME_ENUM } from "../constants/theme";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: THEME_ENUM.LIGHT,
  },
  reducers: {
    setLightTheme(state) {
      state.value = THEME_ENUM.LIGHT;
    },
    setDarkTheme(state) {
      state.value = THEME_ENUM.DARK;
    },
  },
});

export const { setLightTheme, setDarkTheme } = themeSlice.actions;

export default themeSlice.reducer;
