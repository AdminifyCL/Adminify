// Dependencias.

// Definición...
const setCarrito = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const productosCarro = data ?? [];

      if (productosCarro.length > 0) {
        resolve({ error: false, productosCarro });
      }

      reject({ error: true, productosCarro: [] });
    } catch (error) {
      reject(error);
    }
  });
};

// Exportación.
export default setCarrito;
