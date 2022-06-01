// Dependencias.
import React from "react";

// Importación de estilos.
import "./IndexPage.scss";

// Importación de componentes.
import Button from "~components/Button/Button.jsx";

// Definición de la pagina: Index.
const IndexPage = () => {
  return (
    <section className="index_container">
      <div className="title">
        <h1>Index - Page</h1>
      </div>

      <Button btnText="Entrar" />
    </section>
  );
};

// Exportación de la pagina: Index.
export default IndexPage;
