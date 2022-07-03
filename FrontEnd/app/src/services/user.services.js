import { firestore } from "../firebase";

import {collection,
        getDocs, 
        getDoc, 
        addDoc, 
        updateDoc, 
        deleteDoc, 
        doc} from "firebase/firestore";

        const userCollectionRef= collection(firestore,"users");
class UserDataService{

    addUser = (newUser) =>{
        return addDoc(userCollectionRef, newUser)
    }
}

export default new UserDataService();