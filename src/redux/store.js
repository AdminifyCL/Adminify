// Dependencias.
import { legacy_createStore as createStore } from "redux";
import Reducers from "~reducers/index.js";
import initialState from "~redux/initialState.js";

// Creación del store.
const payAdminStore = createStore(
  Reducers,
  initialState,
  //! OJO Desconozco como esto puede afectar a la app de Tauri.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Exportación de la store.
export default payAdminStore;
