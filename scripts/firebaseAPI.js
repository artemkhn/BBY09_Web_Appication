//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAuptU8wCr8czy4FxL_SI_dZ2-IqPxkTBQ",
    authDomain: "bby09-fe8f4.firebaseapp.com",
    projectId: "bby09-fe8f4",
    storageBucket: "bby09-fe8f4.appspot.com",
    messagingSenderId: "825648357135",
    appId: "1:825648357135:web:a3c07b73c198f5912b687a"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var restaurantdb = firebase.database().ref("restaurantForm");

var firebaseRef = firebase.database().ref("restaurantForm");
