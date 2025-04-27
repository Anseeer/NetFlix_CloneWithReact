import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import {addDoc, collection, getFirestore} from "firebase/firestore"
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyDkQCrZj34Ltf6okce8f81GEI4CSXZaWFM",
  authDomain: "netflix-clone-dd469.firebaseapp.com",
  projectId: "netflix-clone-dd469",
  storageBucket: "netflix-clone-dd469.firebasestorage.app",
  messagingSenderId: "909879168229",
  appId: "1:909879168229:web:299bc696d173d9d2c2d80c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)



const SignUp = async (name:string, email:string, password:string)=>{
    try {
        const res = createUserWithEmailAndPassword(auth,email,password);
        const user = (await res).user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email:string,password:string)=>{
    try {
        await signInWithEmailAndPassword(auth ,email ,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {logout,login,SignUp,db,auth}