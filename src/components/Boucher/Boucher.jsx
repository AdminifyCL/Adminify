// Dependencias.
import React from "react";
import { Document, Page, View, Text } from "@react-pdf/renderer";

// Definición del componente: <Boucher />
const Boucher = ({}) => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Hola!</Text>
      </View>
    </Page>
  </Document>
);

export default Boucher;
