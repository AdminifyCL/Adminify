// Dependencias.
import { createContext } from "react";

// Estado inicial.
const initialState = { page: { pageName: "index", url: "/" } };

// Definición del contexto.
const NavbarContext = createContext(initialState);

// Exportación del contexto.
export { NavbarContext, initialState };
