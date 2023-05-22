// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyB2GzZ7lBfSrjcJAHyhRBOxol7_clZx0X4',
	authDomain: 'portable-stereo.firebaseapp.com',
	projectId: 'portable-stereo',
	storageBucket: 'portable-stereo.appspot.com',
	messagingSenderId: '1010041668728',
	appId: '1:1010041668728:web:f40bcb38cd9fd71ea6598d',
	measurementId: 'G-7P0DENYS3L'
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const profileImgCollectionRefference = collection(db, 'ProfileImg');

export const storage = getStorage(app);

// Authentication Module
export const auth = getAuth(app);
