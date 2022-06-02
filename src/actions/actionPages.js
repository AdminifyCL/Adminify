// Dependencias.
import { actionsPageType } from "~types/actionPageTypes.js";

// Definición de los actions de la pagina.
const setActualPage = (payload) => {
  // Dispatch.
  return {
    type: actionsPageType.setActualPage,
    data: payload,
  };
};

const resetActualPage = (payload) => {
  // Dispatch.
  return {
    type: actionsPageType.resetActualPage,
    data: payload,
  };
};

export { setActualPage, resetActualPage };
