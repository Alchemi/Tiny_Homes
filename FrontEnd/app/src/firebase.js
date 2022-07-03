
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCd7vL6CETahIMRs5eJ-j7N5Wqc4_XXSTA",
    authDomain: "tinyhomedevelopmentp3.firebaseapp.com",
    projectId: "tinyhomedevelopmentp3",
    storageBucket: "tinyhomedevelopmentp3.appspot.com",
    messagingSenderId: "1075939577646",
    appId: "1:1075939577646:web:ba6ba77b927226c978f4bf"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const db = getFirestore(app);



export default app;