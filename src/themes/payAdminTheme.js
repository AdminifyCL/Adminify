// Dependencias.
import { createTheme } from "@mui/material";

// Definición del tema por defecto.
const colors = {
  primaryColor: "#226f54",
  whiteColor: "#FFFFFF",
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
    },
  },

  // Definición de colores.
  colors: {
    primaryColor: "#226f54",
    whiteColor: "#FFFFFF",
  },
});

// Exportación del tema.
export default payAdminTheme;
