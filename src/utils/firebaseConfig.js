import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKAommmULWBPF4qK7ubjOMj8qJU4MW-UY",
    authDomain: "demonewsapp-eef20.firebaseapp.com",
    projectId: "demonewsapp-eef20",
    storageBucket: "demonewsapp-eef20.appspot.com",
    messagingSenderId: "348540120037",
    appId: "1:348540120037:web:0b2fc51b0cd2768c8a5d0c",
    measurementId: "G-H2K2DV69KV"
};


// const Firebase = initializeApp(firebaseConfig);

// export default Firebase;
let Firebase = initializeApp(firebaseConfig);

export default Firebase;