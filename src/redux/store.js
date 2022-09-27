// Dependencias.
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import Reducers from "../reducers/index.js";
import initialState from "../redux/initialState.js";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

/**
 * TODO: Se debe ver como manejar la persistencia de datos de Redux.
 */

// Creación del store.
const payAdminStore = createStore(
  Reducers,
  initialState,
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Exportación de la store.
export default payAdminStore;
