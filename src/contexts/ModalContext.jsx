// Dependencias.
import React, { createContext } from "react";

// Definición del contexto.
const ModalContext = createContext({
  visible: false,
  toggleVisibility: () => {},
});

// Exportación.
export default ModalContext;
