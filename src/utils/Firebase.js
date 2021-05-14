cons firebase = require("firebase/app");
require("firebase/auth");


const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

  firebase.initializeApp(firebaseConfig);

  module.exports = {
    async createNewUser(email, password) {

        const result = await firebase.auth().createUserWithEmailandPassword(email, password);

        return result.user.uid;
    },

    async login(email, password) {

        const result = await firebase.auth().signInWithEmailAndPassword(email, password);

        return result.user.uid;
    },
  };