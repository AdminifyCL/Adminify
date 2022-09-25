// Dependencias.
import React, { useState, useEffect } from "react";

// Definición del hook: useLocalStorage.
const useLocalStorage = (key, initialValue) => {
  // -- Manejo del estado.
  const [storageValue, setStorageValue] = useState(() => {
    // Idenficar la carga de la página.
    if (typeof window === "undefined") {
      return initialValue;
    }

    // Consultar el valor del localStorage.
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Configurar un nuevo valor en el localStorage.
  const setValue = (value) => {
    try {
      const valueToStorage = value instanceof Function ? value(storageValue) : value;

      setStorageValue(valueToStorage);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStorage));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storageValue, setValue];
};

// Exportación
export { useLocalStorage };
