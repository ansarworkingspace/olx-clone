import Firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGPevyANQJ0ztVmIYEUYNxvBQ_atwA6ws",
    authDomain: "fir-700b1.firebaseapp.com",
    projectId: "fir-700b1",
    storageBucket: "fir-700b1.appspot.com",
    messagingSenderId: "508384062612",
    appId: "1:508384062612:web:791787306ff424d44b9881",
    measurementId: "G-TETT831F5P"
  };

  export default Firebase.initializeApp(firebaseConfig)