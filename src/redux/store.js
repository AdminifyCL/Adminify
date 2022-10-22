// Dependencias.
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

// Reducers.
import aplicacionReducer from "./slices/aplicacionSlice.js";
import empleadosReducer from "./slices/empleadosSlice.js";
import productosReducer from "./slices/productosSlice.js";
import usuariosReducer from "./slices/usuariosSlice.js";
import ventasReducer from "./slices/ventasSlice.js";

const rootReducer = combineReducers({
  // Aplicación.
  app: aplicacionReducer,

  // Empleados.
  empleado: empleadosReducer,

  // Productos.
  producto: productosReducer,

  // Usuarios.
  user: usuariosReducer,

  // Ventas.
  venta: ventasReducer,
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
