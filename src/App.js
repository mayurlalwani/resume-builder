import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import firebaseAuth from "./config/firebaseConfig";
import Navbar from "./components/Navbar";
import LeftSideBar from "./components/LeftSideBar";
import MainSectionResume from "./components/MainSectionResume";
import "./App.scss";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [loggedUserName, setLoggedUserName] = useState("");
  const [personalInfoDetails, setPersonalInfoDetails] = useState({});
  const [educationInfoDetails, setEducationInfoDetails] = useState({});
  const [experienceDetails, setExperienceDetails] = useState(null);
  const [skills, setSkills] = useState([]);

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
        setLoggedUserName(user.displayName);
      }
    });
  }, []);
  return (
    <div className="main-container">
      {isSignedIn ? (
        <span>
          <Navbar handleLogout={handleLogout} loggedUserName={loggedUserName} />
          <div className="resume-section-container">
            <LeftSideBar
              personalInfoDetails={personalInfoDetails}
              setPersonalInfoDetails={setPersonalInfoDetails}
              educationInfoDetails={educationInfoDetails}
              setEducationInfoDetails={setEducationInfoDetails}
              experienceDetails={experienceDetails}
              setExperienceDetails={setExperienceDetails}
              skills={skills}
              setSkills={setSkills}
            />
            <MainSectionResume
              personalInfoDetails={personalInfoDetails}
              educationInfoDetails={educationInfoDetails}
              experienceDetails={experienceDetails}
              skills={skills}
            />
          </div>
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
