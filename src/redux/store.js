// Dependencias.
import { legacy_createStore as createStore } from "redux";
import Reducers from "~reducers/index.js";
import initialState from "~redux/initialState.js";

// Creación del store.
const payAdminStore = createStore(Reducers, initialState);

// Exportación de la store.
export default payAdminStore;
