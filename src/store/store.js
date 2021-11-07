import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./themeSlice";
import localizationSlice from "./localizationSlice";
import postSlice from "./postSlice";

const rootReducer = combineReducers({
  theme: persistReducer({ key: "theme", storage }, themeReducer),
  localization: persistReducer({ key: "localization", storage }, localizationSlice),
  posts: postSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export const persistor = persistStore(store);

export default store;
