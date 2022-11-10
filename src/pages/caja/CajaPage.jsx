// Dependencias.
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Navigation from "../../components/Navigation/Navigation.jsx";
import { CajaProductos } from "./components/CajaProductos.jsx";
import { CajaCarro } from "./components/CajaCarro.jsx";
import { CajaCierre } from "./components/CajaCierre.jsx";
import { CajaTotal } from "./components/CajaTotal.jsx";
import { CajaBotones } from "./components/CajaBotones.jsx";
import { Fab } from "@mui/material";
import { VscGear } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { publicURL, privateURL } from "../../schemas/Navigation.js";

// Actions.
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";
import { clearMetodo } from "../../redux/slices/ventasSlice.js";
import { clearCarro } from "../../redux/slices/productosSlice.js";

// Importación de estilos.
import "./CajaPage.scss";

// Definición del componente: <CajaPage />
const CajaPage = (props) => {
  // -- Manejo del estado.
  const { productos, sendCarrito } = props;
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [canPay, setCanPay] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [pageVisibility, setPageVisibility] = useState("cajaPage_content");
  const [block, setBlock] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // -- Ciclo de vida.
  useEffect(() => {
    if (carrito.length > 0) {
      setCanPay(true);
    } else {
      setCanPay(false);
    }
  }, [carrito, pageVisibility]);

  useEffect(() => {
    dispatch(clearMetodo());
    dispatch(clearCarro());
  }, []);

  // -- Metodos.

  const cambiarTotal = (valor) => {
    setTotal(total + valor);
  };

  const cambiarCarrito = (id, nombre, precio, cantidad) => {
    setCarrito([...carrito, { id, nombre, precio, cantidad }]);
  };

  const limpiarCarrito = () => {
    setTotal(0);
    setCarrito([]);
  };

  const cambiarCantidad = (id, cantidad, valor, nombre, suma) => {
    const carro = [...carrito];
    carro.map((item) => {
      if (item.id == id) {
        if (suma) {
          item.cantidad = item.cantidad + 1;
          setTotal(total + valor);
        } else {
          if (cantidad >= 0) {
            item.cantidad = item.cantidad - 1;
            setTotal(total - valor);
          }
        }
      }
    });
  };

  const enviarCarrito = () => {
    // Enviar los productos del carrito a REDUX.

    let total = carrito.length;

    if (total > 0) {
      setCanPay(true);
      sendCarrito(carrito);

      // Redirigir al pago.
      navigate(privateURL.pago);
    } else {
      setCanPay(false);

      let newAlert = {
        type: "error",
        title: "Carrito vacío",
        message: "El carrito está vacío, no se puede realizar la venta",
      };

      dispatch(displayAlert(newAlert));
    }
  };

  const cerrarModal = () => {
    setModalVisibility(!modalVisibility);
  };

  const borrarDelCarro = () => {
    const carro = [...carrito];
    const carroFiltrado = carro.filter((item) => item.cantidad > 0);
    setCarrito([...carroFiltrado]);
  };

  const bloquearCaja = (state) => {
    setCarrito([]);
    setTotal(0);
    setPageVisibility(state);
    setBlock(!block);
  };

  // -- Renderizado.
  return (
    <section className="cajaPage_container">
      {/* Navegación de la aplicación. */}
      <section className="cajaPage_navigation">
        <Navigation />
      </section>

      {/* Vista de la caja. */}
      <section className={pageVisibility}>
        {/* Lista de productos. */}

        <CajaCierre
          block={block}
          open={modalVisibility}
          cerrar={cerrarModal}
          bloquearCaja={bloquearCaja}
        />

        <CajaProductos
          total={total}
          productos={productos}
          carrito={[...carrito]}
          cambiarCarrito={cambiarCarrito}
          cambiarTotal={cambiarTotal}
          cambiarCantidad={cambiarCantidad}
          block={block}
        />

        {/* Carrito de compra. */}
        <CajaCarro
          carrito={carrito}
          cambiarCantidad={cambiarCantidad}
          borrarDelCarrito={borrarDelCarro}
          block={block}
        />

        {/* <CajaCajero /> */}
        <CajaTotal total={total} block={block} />

        {/* Botones. */}
        <CajaBotones
          limpia={limpiarCarrito}
          carrito={carrito}
          sendCarrito={enviarCarrito}
          canPay={canPay}
          block={block}
        />
        <Fab
          color="primary"
          aria-label="add"
          style={{ position: "absolute", top: "88%", left: "93%" }}
          onClick={() => {
            if (!block) {
              setPageVisibility("cajaPage_content_modal");
            }
            setModalVisibility(true);
          }}
        >
          <VscGear size={30} />
        </Fab>
      </section>
    </section>
  );
};

// Exportación de la pagina: Index.
export default CajaPage;
