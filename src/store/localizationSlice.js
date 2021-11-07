import { createSlice } from "@reduxjs/toolkit";
import { LANGUAGE } from "../lang";

const localizationSlice = createSlice({
  name: "localization",
  initialState: {
    value: LANGUAGE.DEFAULT,
  },
  reducers: {
    setEnglish(state) {
      state.value = LANGUAGE.EN_US;
    },
    setPortuguese(state) {
      state.value = LANGUAGE.PT_BR;
    },
  },
});

export const { setEnglish, setPortuguese } = localizationSlice.actions;

export default localizationSlice.reducer;
