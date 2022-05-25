// Dependencias.
import { createContext } from "react";

// Estado inicial.
const initialState = {
  name: "index",
  path: "/",
};

// Definición del contexto.
const NavbarContext = createContext(initialState);

// Exportación del contexto.
export { NavbarContext, initialState };
