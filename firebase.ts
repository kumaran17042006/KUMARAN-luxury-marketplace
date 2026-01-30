import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6q6DSMeByfCLgyniDQWQ5n5pqq50WXiU",
  authDomain: "kumaran-luxury-marketplace.firebaseapp.com",
  projectId: "kumaran-luxury-marketplace",
  storageBucket: "kumaran-luxury-marketplace.firebasestorage.app",
  messagingSenderId: "484422704676",
  appId: "1:484422704676:web:94262cf80caf5a01c142b1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
