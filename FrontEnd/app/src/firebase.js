import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjVhSkkrO8ifVOE5kDV9JLZX3-u21FqQs",
  authDomain: "tiny-auth-development.firebaseapp.com",
  projectId: "tiny-auth-development",
  storageBucket: "tiny-auth-development.appspot.com",
  messagingSenderId: "10957208203",
  appId: "1:10957208203:web:9945882e6fced1c6feb28e"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export default app;