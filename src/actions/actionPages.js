// Definición de los actions de la pagina.
const setActualPage = (payload) => {
  console.log("[ACTION][setActualPage]");
  const { pageName } = payload;

  return {
    type: "SET_ACTUAL_PAGE",
    pageName,
  };
};

export { setActualPage };
