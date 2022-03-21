import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import firebase, { initializeApp } from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbLaojvp2TdvsB-vaky1H3cBy_d1w3soE",
  authDomain: "streaming-demo-c5bc5.firebaseapp.com",
  projectId: "streaming-demo-c5bc5",
  storageBucket: "streaming-demo-c5bc5.appspot.com",
  messagingSenderId: "431103471939",
  appId: "1:431103471939:web:62d9717ee257ace25f7ff6",
  measurementId: "G-QB6XY0V96X"
}
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const firestore = getFirestore(app);


 export default app


