const firebaseConfig = {
  apiKey: "AIzaSyD2zrCLty3DUuvMysUTP9WlKcM8SobcTFU",
  authDomain: "disneyplusclone-9c5fb.firebaseapp.com",
  projectId: "disneyplusclone-9c5fb",
  storageBucket: "disneyplusclone-9c5fb.appspot.com",
  messagingSenderId: "136773115338",
  appId: "1:136773115338:web:2342ce2eed86fba71d4333",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
