// Dependencias
import React, { useEffect, useState } from "react";

// Definición del hook: useReactPath.
const useReactPath = () => {
  // Estados y props.
  const [path, setPath] = useState(window.location.pathname);

  // Efectos.
  useEffect(() => {
    // Escuchador de los cambios de path.
    window.addEventListener("popstate", listenToPropState);

    return () => {
      window.removeEventListener("popstate", listenToPropState);
    };
  }, []);

  // Metodos.
  const listenToPropState = () => {
    const windowPath = window.location.pathname;
    setPath(windowPath);
  };

  // Respuesta.
  return path;
};

// Exportación del hook: useReactPath.
export default useReactPath;
