// Dependencias.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "~config/config.js";

// Configuraciones.
const firebaseConfig = {
  apiKey: config.firebase.API_KEY,
  authDomain: config.firebase.AUTH_DOMAIN,
  projectId: config.firebase.PROJECT_ID,
  storageBucket: config.firebase.STORAGE_BUCKET,
  messagingSenderId: config.firebase.MESSAGING_SENDER_ID,
  appId: config.firebase.APP_ID,
  measurementId: config.firebase.MEASUREMENT_ID,
};

// Inicialización de la base de datos.
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

// Exportación de las configuraciones.
export { firebaseApp, firestore };
