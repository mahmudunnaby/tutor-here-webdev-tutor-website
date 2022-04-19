// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx5qHowSFTt-Fqyb2GAcqIIxTyLKz7HmA",
    authDomain: "independent-service-prov-e89b6.firebaseapp.com",
    projectId: "independent-service-prov-e89b6",
    storageBucket: "independent-service-prov-e89b6.appspot.com",
    messagingSenderId: "953881031503",
    appId: "1:953881031503:web:070a4aa002f77a5ebb0b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth