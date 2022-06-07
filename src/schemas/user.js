// Dependencias.
import mongoose from "mongoose";
const { schema } = mongoose;

// Definición del esquema de usuario.
const userSchema = new Schema({
  userId: ObjectId,
  name: String,
  email: String,
  rut: String,
  password: String,
});

// Exportación del esquema.
export default userSchema;
