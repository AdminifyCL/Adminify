// Dependencias.
import React, { useEffect } from "react";
import PropTypes from "prop-types";

// Importación de estilos.
import "./Button.scss";

// Importación de componentes.

// Definición del componente: <Button />.
const Button = (props) => {
  // Estado y props.

  // Efectos.
  useEffect(() => {}, []);

  // Metodos.
  function handleTheme() {
    const { theme } = props;

    // Cambiando el tema del botón
    switch (theme) {
      case "light":
        return "btn-container bg-light bg-pill";
      default:
        return "btn-container bg-default bg-pill";
    }
  }

  const { btnText } = props;
  // Renderizado.
  return <button className={handleTheme()}>{btnText}</button>;
};

// Prop types.
Button.propTypes = {
  theme: PropTypes.string,
  btnText: PropTypes.string,
};

// Exportación del componente: <Button />.
export default Button;
