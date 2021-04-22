const firebaseConfig = {
  apiKey: "AIzaSyBkPCMz2_i4SQ0TCuAd9Z2f5XTFRPHqBHw",
  authDomain: "disney-plus-slone.firebaseapp.com",
  projectId: "disney-plus-slone",
  storageBucket: "disney-plus-slone.appspot.com",
  messagingSenderId: "375261447621",
  appId: "1:375261447621:web:1dec1f8b8da3b581bb37ac"
};

const firebaseApp = firebase.intializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export{auth,provider,storage};
export default db;