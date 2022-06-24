import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import React, { useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyC53kFlnq6MMtz1Yrs03qtMC3zLtBVt3fQ",
    authDomain: "pixelland-29cc4.firebaseapp.com",
    databaseURL: "https://pixelland-29cc4-default-rtdb.firebaseio.com",
    projectId: "pixelland-29cc4",
    storageBucket: "pixelland-29cc4.appspot.com",
    messagingSenderId: "152943033166",
    appId: "1:152943033166:web:b93130e00ed25013373c1f",
    measurementId: "G-YMQBN9P51G"
  };


firebase.initializeApp(firebaseConfig);



// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
    
  },
  
};

function SignInScreen() {
  
  return (
    
      <div className='signIn'>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
      
    
  );
}

export default SignInScreen