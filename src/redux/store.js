// Dependencias.
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// Configuración de persistencia.
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configuración de la store.
const isDev = process.env.NODE_ENV !== "production";
console.log(isDev ? "[🦆] Redux en modo desarrollo." : "[🦆] Redux en modo producción.");

const store = configureStore({
  reducer: persistedReducer,
  devTools: isDev,
  middleware: [thunk],
});

const persistor = persistStore(store);

// Exportación.
export { store, persistor };
