//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDZrPT38qIOT2_yC7pLb__1tnxxjvzp9vo",
    authDomain: "bby09-59506.firebaseapp.com",
    projectId: "bby09-59506",
    storageBucket: "bby09-59506.appspot.com",
    messagingSenderId: "98235674769",
    appId: "1:98235674769:web:1316db00fcb4d6e858cf30"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();