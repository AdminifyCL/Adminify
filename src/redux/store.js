// Dependencias.
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

// Reducers.
import aplicacionReducer from "./slices/aplicacionSlice.js";

const rootReducer = combineReducers({
  // Aplicación.
  app: aplicacionReducer,

  // Empleados.
  // Productos.
  // Usuarios.
  // Ventas.
});

// Persistencia.
const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store.
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

// Exportación.
export { store, persistor };
