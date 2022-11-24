// Dependencias.
import { createSlice } from "@reduxjs/toolkit";
import aplicacionState from "../states/aplicacionState.js";

// Adapters.
// ...

// Definición del slice.
const aplicacionSlice = createSlice({
  name: "aplicacion",
  initialState: aplicacionState,

  // Reducers.
  reducers: {
    //* -- Manejo de las alertas.
    displayAlert: (state, action) => {
      let alertData = action.payload;
      let alertVisible = true;

      return { ...state, alertData, alertVisible };
    },

    deleteAlert: (state, action) => {
      let alertData = {
        type: "",
        title: "",
        message: "",
      };

      let alertVisible = false;

      return { ...state, alertData, alertVisible };
    },

    //* -- Manejo de la caja.
    openCaja: (state, action) => {
      return { ...state, statusCaja: true };
    },

    closeCaja: (state, action) => {
      return { ...state, statusCaja: false };
    },

    aperturarCaja: (state, action) => {
      const payload = action.payload;
      console.log({ payload });

      let hora = action.payload;

      console.log("[] HORA: ", hora);
      console.log("[] TYPE:", typeof hora);

      return { ...state, horaApertura: hora };
    },

    cierreCaja: (state, action) => {
      let hora = action.payload;
      return { ...state, horaCierre: hora };
    },
  },
});

// Exportación.
export const { displayAlert, deleteAlert, openCaja, closeCaja, aperturarCaja, cierreCaja } =
  aplicacionSlice.actions;
export default aplicacionSlice.reducer;
