const onSuccess = (dispatch, type, data = {}) => {
  return dispatch({
    // Estandar de errores.
    error: false,
    success: true,

    // Información relevante.
    type: type,
    data: data,
  });
};

const onError = (dispatch, type, data = {}) => {
  return dispatch({
    // Estandar de errores.
    error: true,
    success: false,

    // Información relevante.
    type: type,
    data: data,
  });
};

// Exportación.
export { onSuccess, onError };
