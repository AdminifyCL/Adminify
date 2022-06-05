// Dependencias.
import React, { useState, useEffect, Suspense } from "react";
import { Skeleton, Stack } from "@mui/material";

// Importación de estilos.
import "./CardVersionList.scss";

// Importación de componentes.
import CardVersion from "~components/CardVersion/CardVersion.jsx";

// Definición del componente: <CardVersionList />.
const CardVersionList = () => {
  // Estado y props.
  const [loading, setLoading] = useState(true);

  // Efectos.
  useEffect(() => {
    // TODO: De momento se maneja asi el evento para estructurar todo.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // Metodos.
  function consultarApi() {
    //? Desde aquí se consultan los cambios de versión desde la API de payadmin.

    return {};
  }

  // TODO: esto se podria mejorar con un Suspense.
  // Renderizado del componente.
  if (loading) {
    return (
      <section className="container-loading">
        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={30}></Skeleton>
          <Skeleton variant="rectangular" width={800} height={200}></Skeleton>
          <Skeleton variant="rectangular" width={500} height={80}></Skeleton>
        </Stack>
      </section>
    );
  } else {
    return (
      <section className="container-cardVersionList">
        <h1>Cards Versions List</h1>
        <CardVersion />
      </section>
    );
  }
};

// Exportación del componente: <CardVersionList />.
export default CardVersionList;
