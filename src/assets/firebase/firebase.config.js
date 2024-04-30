
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  
  apiKey: "AIzaSyCgKmb7ycwvPaJfWeZ_KizAEaPWDbFfuUA",
  authDomain: "tourism-management-syste-8a17c.firebaseapp.com",
  projectId: "tourism-management-syste-8a17c",
  storageBucket: "tourism-management-syste-8a17c.appspot.com",
  messagingSenderId: "1042210805269",
  appId: "1:1042210805269:web:b49ac5ed555515c1aba01c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default app; 
export { auth }; 
