// Dependencias.
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import Reducers from "~reducers/index.js";
import initialState from "~redux/initialState.js";

// Creación del store.
const payAdminStore = createStore(
  Reducers,
  initialState,
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Exportación de la store.
export default payAdminStore;
