import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGGA2G3N0JSYcVjbTyll3NCg24N0s8_2o",
  authDomain: "shop-e2810.firebaseapp.com",
  projectId: "shop-e2810",
  storageBucket: "shop-e2810.appspot.com",
  messagingSenderId: "758165041785",
  appId: "1:758165041785:web:a3673cb81948476e105aa8",
  measurementId: "G-1EH7QC4MC6"
};

const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig