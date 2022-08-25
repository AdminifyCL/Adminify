// Dependencias.
import { createTheme } from "@mui/material";

// Fuentes.

// Definición del tema por defecto.
const colors = {
  primaryColor: "#226f54",
  whiteColor: "#FFFFFF",
  grayColor: "#EFF0F6",
};

const payAdminTheme = createTheme({
  // Definición de la paleta de colores de los componentes.
  palette: {
    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.whiteColor,
    },
  },

  // Definición de los componentes.
  components: {
    MuiButton: {
      root: {
        fontSize: "1rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      },
      styleOverrides: {
        root: {
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "bold",
          fontSize: "1rem",
        },
      },
    },
  },

  // Definición de colores.
  colors: {
    primaryColor: "#226f54",
    whiteColor: "#FFFFFF",
  },

  typography: {
    fontFamily: ["'Poppins', sans-serif"].join(","),
  },
});

// Exportación del tema.
export default payAdminTheme;
