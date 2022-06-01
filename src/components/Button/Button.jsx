// Dependencias.
import React from "react";

// Importación de estilos.
import "./Button.scss";

// Importación de componentes.

// Definición del componente: <Button />.
const Button = (props) => {
  const { btnText } = props;

  // Metodos.
  function handleClick() {
    alert("Hola");
  }

  // Renderizado.
  return (
    <button className="container" onClick={() => handleClick()}>
      <h1>{btnText}</h1>
    </button>
  );
};

// Exportación del componente: <Button />.
export default Button;
