// Dependencias.
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// Reducers.
import appReducer from "./slices/appSlice.js";
import empleadoReducer from "./slices/empleadoSlice.js";
import productReducer from "./slices/productSlice.js";
import userReducer from "./slices/userSlice.js";
import ventasReducer from "./slices/ventasSlice.js";

const rootReducer = combineReducers({
  app: appReducer,
  empleado: empleadoReducer,
  producto: productReducer,
  user: userReducer,
  venta: ventasReducer,
});

// Configuración de persistencia.
const persistConfig = {
  key: "root",
  storage,
};

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
