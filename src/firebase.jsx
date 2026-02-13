import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjkoyeHDenT4NC5wzW69PhwTFqyBtAIMM",
  authDomain: "wedding-invation-b112f.firebaseapp.com",
  projectId: "wedding-invation-b112f",
  storageBucket: "wedding-invation-b112f.firebasestorage.app",
  messagingSenderId: "992946455876",
  appId: "1:992946455876:web:89a9a0c01840b360f8c311"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
