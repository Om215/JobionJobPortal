// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "jobion-storage.firebaseapp.com",
  projectId: "jobion-storage",
  storageBucket: "jobion-storage.appspot.com",
  messagingSenderId: "500967891824",
  appId: "1:500967891824:web:d8e280b78084372c1ce5b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);