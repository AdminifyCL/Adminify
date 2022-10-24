import React from "react";
import { Document, Text, Page } from "@react-pdf/renderer";

const DocuPDF = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>
            Se confirmo la transacción, toda la información de la venta se podra encontrar en la
            base de datos de ventas.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
