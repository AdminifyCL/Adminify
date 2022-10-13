// Dependencias.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Definición de las configuraciones.
const config = defineConfig(({ command, mode }) => {
  if (command === "serve") {
    return {
      // Plugins
      plugins: [react()],
    };
  } else if (command === "build") {
    return {
      // Plugins
      plugins: [react()],
    };
  } else {
    return {
      // Plugins
      plugins: [react()],
    };
  }
});

export default config;

