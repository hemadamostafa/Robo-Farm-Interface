import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlx5OnrrXxxkGs1S_9DA3IZdiDDtj9ba4",
  authDomain: "robofarm-d8c24.firebaseapp.com",
  databaseURL: "https://robofarm-d8c24-default-rtdb.firebaseio.com",
  projectId: "robofarm-d8c24",
  storageBucket: "robofarm-d8c24.appspot.com",
  messagingSenderId: "555262690132",
  appId: "1:555262690132:web:b5d9186752e5fa1b1a3ec1"
};

const app = firebase.initializeApp(firebaseConfig);
const database = getDatabase(app);

/* const firebase = () => {
  return (
    <div>firebase</div>
  ) 
}*/

export default database