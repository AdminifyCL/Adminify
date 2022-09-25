/**
 * @param {int} monthNumber
 */
const handleDateMonth = (monthNumber) => {
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return monthNames[monthNumber];
};

// Exportación.
export default handleDateMonth;
