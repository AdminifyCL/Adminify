// Dispatcher para un caso de error.
const onError = (dispatch, reducer, data) => {
  dispatch();
};

// Dispatcher para un caso de éxito.
const onSuccess = (dispatch, reducer, data) => {
  dispatch();
};

// Exportación
export { onError, onSuccess };
