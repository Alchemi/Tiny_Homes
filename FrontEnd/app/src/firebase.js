
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
export const firestore = getFirestore(app);

// export const createUserDocument = async (user, additionalData)=>{
//     if(!user) return;
//     const userRef = firestore.doc(`users/${user.uid}`);
//     const snapshot = await userRef.get();
//     if(!snapshot.exists){
//         const{email}=user;
//         const{password}=user;
//         const{firstName} = additionalData;
//         try{
//             user.reF.set({
//                 firstName,
//                 lastName,
//                 email,
//                 password,
//                 username,
//                 phone,
//                 zipcode

                
//             });
//         }catch(error){
//             console.log('Error in creating user', error)
//         }
//     }

// }

export default app;