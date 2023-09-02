import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFliqZGcNXormPgUZYtScyg_Y-SA8yKe0",
  authDomain: "jagi-app2023.firebaseapp.com",
  projectId: "jagi-app2023",
  storageBucket: "jagi-app2023.appspot.com",
  messagingSenderId: "1093452055895",
  appId: "1:1093452055895:web:b019cd2d2c8dba1ed06a12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
