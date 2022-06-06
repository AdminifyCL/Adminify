// Dependencias.
import React, { useState, useEffect, Suspense } from "react";
import { Skeleton, Stack } from "@mui/material";
import { fakeAPI } from "~models/fakeAPI.js";

// Importación de estilos.
import "./CardVersionList.scss";

// Importación de componentes.
import CardVersion from "~components/CardVersion/CardVersion.jsx";

// Definición del componente: <CardVersionList />.
const CardVersionList = () => {
  // Estado y props.
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Efectos.
  // ComponentDidMount
  useEffect(() => {
    // Llamado a la API.
    consultarApi();
  }, []);

  // Metodos.
  function consultarApi() {
    //? Desde aquí se consultan los cambios de versión desde la API de payadmin.
    // TODO: De momento se maneja asi el evento para estructurar todo.
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Consulta datos de prueba.
    const result = fakeAPI;

    // Se asigna el resultado a la variable de estado.
    setData(result.cardList);
  }

  function mappingData() {
    return data.map((item) => {
      return <CardVersion key={item.id} data={item} />;
    });
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

        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={30}></Skeleton>
          <Skeleton variant="rectangular" width={800} height={200}></Skeleton>
          <Skeleton variant="rectangular" width={500} height={80}></Skeleton>
        </Stack>

        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={30}></Skeleton>
          <Skeleton variant="rectangular" width={800} height={200}></Skeleton>
          <Skeleton variant="rectangular" width={500} height={80}></Skeleton>
        </Stack>
      </section>
    );
  } else {
    return <section className="container-cardVersionList">{mappingData()}</section>;
  }
};

// Exportación del componente: <CardVersionList />.
export default CardVersionList;
