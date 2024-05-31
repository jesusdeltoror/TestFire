import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyAWAwl-YumLYXwFhDt7bV4wbwXHClrZ1_s",
    authDomain: "iti-game.firebaseapp.com",
    projectId: "iti-game",
    storageBucket: "iti-game.appspot.com",
    messagingSenderId: "198498851649",
    appId: "1:198498851649:web:3c220392f1ffff72059fc0",
    measurementId: "G-X53LND417N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();


//Variables
let login = document.getElementById("in")
let logout = document.getElementById("out")
let estado = document.getElementById("estado")


logout.addEventListener("click", ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
})

login.addEventListener("click", ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
})



onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        // ...
    } else {
        estado.innerHTML = "Desconectado"
    }
});