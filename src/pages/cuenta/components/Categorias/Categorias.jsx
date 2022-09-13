// Dependencias.
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ListaTags from "./ListaTags.jsx";
import fakeCategorias from "../../../../models/fakeCategorias.js";

// Estilos.
import "./Categorias.scss";
import EditarCategorias from "./EditarCategorias.jsx";

// Definición del componente: <CategoriasContainer />
const CategoriasContainer = ({}) => {
  // -- Manejo del estado.
  const [categorias, setCategorias] = useState([]);
  const [visible, setVisible] = useState(false);

  // -- Ciclo de vida del componente.
  useEffect(() => {
    return () => {};
  }, [categorias]);

  // -- Metodos.
  const handleVisibility = () => {
    console.log("[] Handle visibility");
    setVisible(!visible);
  };

  // -- Renderizado.
  return (
    <div className="CategoriasContainer_content">
      {/* Modal de categorias */}
      <EditarCategorias
        visible={visible}
        changeVisibility={handleVisibility}
        setCategorias={setCategorias}
      />

      {/* Banner principal */}
      <div className="CategoriasContainer_banner">
        {/* Titulo */}
        <div className="CategoriasContainer_titulo">
          <h1>Categorias</h1>
          <p>
            Sección para agregar, editar y eliminar las <strong>categorias</strong> de los
            productos.
          </p>
        </div>

        {/* Botón */}
        <div>
          <Button variant="contained" onClick={() => handleVisibility()}>
            Editar categoria
          </Button>
        </div>
      </div>

      {/* Contenedor de las categorias. */}
      {console.log("[] CATEGORIAS:", categorias)}
      <ListaTags tags={categorias} />
    </div>
  );
};

// Exportación.
export default CategoriasContainer;
