import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBZkySlcG4UfMNjeTXacvUyCTzwEu_ZLes",
  authDomain: "sig-board.firebaseapp.com",
  databaseURL: "https://sig-board.firebaseio.com",
  storageBucket: "sig-board.appspot.com",
  messagingSenderId: "1087331700299"
};

const app = Firebase.initializeApp(config);

export const database = app.database();

export default app;
