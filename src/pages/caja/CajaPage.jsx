// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CajaProductos } from "./components/Producto/CajaProductos.jsx";
import { CajaCarro } from "./components/Carro/CajaCarro.jsx";
import { CajaCierre } from "./components/Cierre/CajaCierre.jsx";
import { CajaTotal } from "./components/Total/CajaTotal.jsx";
import { CajaBotones } from "./components/Botones/CajaBotones.jsx";
import { CajaModal } from "./components/Modal/CajaModal.jsx"
import { useNavigate } from "react-router-dom";
import { privateURL } from "../../schemas/Navigation.js";

// Actions.
import { displayAlert } from "../../redux/slices/aplicacionSlice.js";
import { clearMetodo } from "../../redux/slices/ventasSlice.js";
import { clearCarro } from "../../redux/slices/productosSlice.js";

// Importación de estilos.
import "./CajaPage.scss";

// Definición del componente: <CajaPage />
const CajaPage = (props) => {
  // -- Manejo del estado.
  const { productos, sendCarrito, statusCaja, setStatus, horaApertura,horaCierre,handleCierre,handleApertura,handleDisplayAlert} = props;
  const [total, setTotal] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [canPay, setCanPay] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // -- Ciclo de vida.
  useEffect(() => {
    if (carrito.length > 0) {
      setCanPay(true);
    } else {
      setCanPay(false);
    }
  }, [carrito]);

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
    if (statusCaja){
      setStatus("close");
    }else{
      setStatus("open");
    }
  };

  // -- Renderizado.
  return (
    <section className="cajaPage_container">
      {/* Vista de la caja. */}

      <section className="cajaPage_content">
        {/* Lista de productos. */}

        <CajaCierre
          block={statusCaja}
          open={modalVisibility}
          cerrar={cerrarModal}
          bloquearCaja={bloquearCaja}
          abrirCaja = {handleApertura}
          cerrarCaja = {handleCierre}
        />

        {/* Lista de los productos */}
        <CajaProductos
          total={total}
          productos={productos}
          carrito={[...carrito]}
          cambiarCarrito={cambiarCarrito}
          cambiarTotal={cambiarTotal}
          cambiarCantidad={cambiarCantidad}
          block={statusCaja}
        />

        {/* Carrito de compra. */}
        <CajaCarro
          carrito={carrito}
          cambiarCantidad={cambiarCantidad}
          borrarDelCarrito={borrarDelCarro}
          block={statusCaja}
        />

        {/* <CajaCajero /> */}
        <CajaTotal total={total} block={statusCaja} />

        {/* Botones. */}
        <CajaBotones
          limpia={limpiarCarrito}
          carrito={carrito}
          sendCarrito={enviarCarrito}
          canPay={canPay}
          block={statusCaja}
        />

        {/* Boton de cierre de caja */}
        <CajaModal verModal = {setModalVisibility}></CajaModal>
      </section>
    </section>
  );
};

// Exportación de la pagina: Index.
export default CajaPage;
