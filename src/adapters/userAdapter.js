// Dependencias.

/**
 * @name Adaptador_de_usuario
 * @description Adaptador de la información del usuario.
 * @param {object} externalData
 */
const userAdapter = (externalData) => {
  let formattedData = {
    //* Información del usuario.
    uid: externalData?.uid ?? "",
    nombre: externalData?.nombre ?? "",
    apellido: externalData?.apellido ?? "",
    displayName: externalData?.displayName ?? "",
    email: externalData?.email ?? "",
    emailVerified: externalData?.emailVerified ?? false,

    //* Información de la cuenta.
    licencia: externalData?.licencia ?? "",
    cargo: externalData?.cargo ?? "",

    //* Tiempo.
    lastLoginAt: externalData?.lastLoginAt ?? "",
    createdAt: externalData?.createdAt ?? "",
  };

  return formattedData;
};

// Exportación.
export default userAdapter;
