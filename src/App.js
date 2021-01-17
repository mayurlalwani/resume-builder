import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import firebaseAuth from "./config/firebaseConfig";

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
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      if (user.uid !== "") {
        setUserId(user.uid);
      }
    });
  }, []);
  return (
    <div>
      {isSignedIn ? <h1>Signed In</h1> : <h1>Not signed In</h1>}
      <StyledFirebaseAuth
        uiConfig={firebaseConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
}

export default App;
