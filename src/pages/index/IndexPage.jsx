// Dependencias.
import React from "react";

// Importación de estilos.
import "./IndexPage.scss";

// Importación de componentes.
import Button from "~components/Button/Button.jsx";
import { Link } from "react-router-dom";

// Definición de la pagina: Index.
const IndexPage = (props) => {
  return (
    <section className="index_container">
      <div className="title">
        <h1>Index - Page</h1>
      </div>

      {/* Ojo, esta wea esta funcionando mal, el area de activación es menor al contenedor del botón.   */}
      <Link to="login">
        <Button theme="light" btnText="Iniciar sesión" />
      </Link>
    </section>
  );
};

// Exportación de la pagina: Index.
export default IndexPage;
