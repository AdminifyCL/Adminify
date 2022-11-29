import React, { useState, useEffect, useId, useRef } from "react";
import { FaPrint } from "react-icons/fa";
import { Badge, IconButton, Chip } from "@mui/material";
import { useReactToPrint } from "react-to-print";

export default function (props) {
  const { vendedor, fecha, metodo, total } = props;
  const referencia = useRef();
  const handlePrint = useReactToPrint({
    content: () => referencia.current,
  });

  return (
    <>
      <IconButton
        onClick={() => {
          handlePrint();
        }}
      >
        <FaPrint></FaPrint>
      </IconButton>
    </>
  );
}
