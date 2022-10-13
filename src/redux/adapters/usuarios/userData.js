const adapter = (data) => {
  // Desestructuración.
  const userId = data.uid ?? data.id ?? "";
  const userEmail = data.email ?? "";
  const displayName = data.displayName ?? "";
  const nombre = data.nombre ?? displayName.split(" ")[0] ?? "";
  const apellido = data.apellido ?? displayName.split(" ")[1] ?? "";
  const cargo = data.cargo ?? "";
  const creacion = data.createdAt ?? 0;
  const verificado = data.emailVerified ?? false;
  const ultima = data.lastLoginAt ?? {};
  const licencia = data.licencia ?? "";
  const tiendaId = data.tiendaId ?? "";

  // // Modelo de datos.
  let userData = {
    // Identificación del usuario.
    uid: userId,
    email: userEmail,
    username: displayName,
    nombre: nombre,
    apellido: apellido,
    cargo: cargo,
    createdAt: creacion,
    emailVerified: verificado,
    lastLoginAt: ultima,
    licencia: licencia,
    tiendaId: tiendaId,
  };

  return userData;
};

// Exportación.
export default adapter;
