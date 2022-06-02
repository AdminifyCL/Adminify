// Dependencias.
import { combineReducers } from "redux";
import { appReducer } from "./appReducer.js";
import { companyReducer } from "./companyReducer.js";
import { pageReducer } from "./pagesReducer.js";
import { userReducer } from "./userReducer.js";

// Definición de los reducers.
const Reducers = combineReducers({
  page: pageReducer,
  app: appReducer,
  company: companyReducer,
  user: userReducer,
});

// Exportación de los reducers.
export default Reducers;
