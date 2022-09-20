// Importar las funciones SDKs que se necesiten
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Agregar SDKs para los productos de Firebase que se quieran usar

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIY33vO1N_wBxdKkhSn01AtpXEayZenMw",
  authDomain: "fukosuke-3552c.firebaseapp.com",
  projectId: "fukosuke-3552c",
  storageBucket: "fukosuke-3552c.appspot.com",
  messagingSenderId: "457722519690",
  appId: "1:457722519690:web:69548f13606050abb08d73",
  measurementId: "G-95V7SDS0SP"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

