import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import firebaseAuth from "./config/firebaseConfig";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";
import "./App.scss";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState("");
  firebaseAuth.auth().onAuthStateChanged((user) => {
    return user
      ? setIsSignedIn(true) && setUserId(user.uid)
      : setIsSignedIn(false);
  });

  const firebaseConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };
  const handleLogout = () => {
    firebase.auth().signOut();
  };
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      if (user.uid !== "") {
        setUserId(user.uid);
      }
    });
  }, []);
  return (
    <div className="main-container">
      {isSignedIn ? (
        <span>
          <Navbar handleLogout={handleLogout} />
          <LeftSideBar />
        </span>
      ) : (
        <StyledFirebaseAuth
          uiConfig={firebaseConfig}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  );
}

export default App;
