import {db} from"../firebase-config";

import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";


const productCollectionRef = collection(db,"products");
class ProductDataService{
    addProducts = (newProduct) =>{
    return addDoc(productCollectionRef, newProduct);
    };

    updateProduct = (id, updatedProduct) => {
        const productsDoc = doc(db, "products", id);
        return updateDoc(productsDoc, updatedProduct);
    };

    deleteProduct = (id) => {
        const productsDoc = doc(db, "products", id);
        return deleteDoc(productsDoc);
    };

    getAllProducts = () => {
        return getDocs(productCollectionRef);
    };

    getProduct = (id) => {
        const productsDoc = doc(db, "products", id);
        return getDoc(productsDoc);

    };
}

export default new ProductDataService();
