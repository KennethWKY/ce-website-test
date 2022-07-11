import "./App.css";
import Authentication from "./Components/Authentication/Authentication.jsx";
import Cms from "./Components/CMS/Cms";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import db from "./Firebase";
import { doc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <div className="bg-white min-h-screen">
        {user ? <Cms user={user} /> : <Authentication />}
      </div>
    </div>
  );
}

export default App;
