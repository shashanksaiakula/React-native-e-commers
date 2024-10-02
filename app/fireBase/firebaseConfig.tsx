import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCgjwPfMbhVrtmHAkMwHDSS135p_viJDiE",
  authDomain: "reactnative-98dbb.firebaseapp.com",
  projectId: "reactnative-98dbb",
  storageBucket: "reactnative-98dbb.appspot.com",
  messagingSenderId: "1005389113313",
  appId: "1:1005389113313:web:264f2d08c325dfb90214a0",
  measurementId: "G-Z6KHRCBWE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, db, auth };
