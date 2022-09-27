// Dependencias.
// ...

// Configuraciones.
import { actionProductTypes } from "../../types/actionProductTypes.js";
import { onSuccess, onError } from "../response.js";
const { setCarrito: TYPE } = actionProductTypes;

const setCarrito = (productosCarro) => {
  console.log(`[🛂][ACTION][${TYPE}]`);

  // Fetch
  return async (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("[] Productos carrito:", productosCarro);

        if (productosCarro.length > 0) {
          onSuccess(dispatch, TYPE, productosCarro);
          resolve();
        }

        reject({ error: true, message: "No hay productos en el carrito." });
      } catch (error) {
        onError(dispatch, TYPE, error);
        reject(error);
      }
    });
  };
};

// Exportación.
export { setCarrito };
