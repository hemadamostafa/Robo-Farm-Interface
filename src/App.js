import React, { useRef, useState } from 'react';
import './App.css';
import FarmData from './components/FarmData';
import StreamedVideo from './components/StreamedVideo';
import ControlPanel from './components/ControlPanel';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

//import { useAuthState } from 'react-firebase-hooks/auth';
//import { useCollectionData } from 'react-firebase-hooks/firestore';
import { initializeApp } from "firebase/app";


//const auth = firebase.auth();
//const firestore = firebase.firestore();
//const analytics = firebase.analytics();

//const app = initializeApp(firebaseConfig);

function App() {

//  const db = firebase.firestore();

  return (
    <>

    <div className='contrainer container-fluid bg-secondary' >

      <StreamedVideo />

      <FarmData tempreture="50" humdity="60" amonia="40" gas="80" />

      <ControlPanel />

    </div>


  </>
  );
}

export default App;
