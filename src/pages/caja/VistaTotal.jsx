import React, { Component , useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./CajaPage.scss";

export function VistaTotal({total}){
    return <div className="cajaPage_Total">Total : ${total}</div>
}

export default VistaTotal;