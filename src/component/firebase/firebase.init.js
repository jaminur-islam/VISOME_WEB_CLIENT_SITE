import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";

const firebaseAuthenticationInit = () => {
  const app = initializeApp(firebaseConfig);
};

export default firebaseAuthenticationInit;
