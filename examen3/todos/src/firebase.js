import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCHLq4aOO1Xqs-SX18caFsQg95urbffui0",
    authDomain: "todo-paradigmas-sts.firebaseapp.com",
    databaseURL: "https://todo-paradigmas-sts.firebaseio.com",
    projectId: "todo-paradigmas-sts",
    storageBucket: "todo-paradigmas-sts.appspot.com",
    messagingSenderId: "972909643392",
    appId: "1:972909643392:web:0097571836b10949968865"
};

//  Initialize firebase
firebase.initializeApp(firebaseConfig);

export {firebase};