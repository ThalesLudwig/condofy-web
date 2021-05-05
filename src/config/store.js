import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "../slices/themeSlice";
import localizationSlice from "../slices/localizationSlice";

const rootReducer = combineReducers({
  theme: persistReducer({ key: "theme", storage }, themeReducer),
  localization: persistReducer(
    { key: "localization", storage },
    localizationSlice
  ),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
});

export const persistor = persistStore(store);

export default store;
