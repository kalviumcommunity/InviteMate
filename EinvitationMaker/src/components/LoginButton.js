import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Combined.css";

function LoginButton() {
  const [logOut, setLogOut] = useState(false);

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  const openModel = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <div>
      {isAuthenticated ? (
        <div className="profile" onClick={() => setLogOut(true)}>
          <img id="profilePic" src={user.picture} alt="profile"></img>
          <p id="profileName">{user.name}</p>
        </div>
      ) : (
        <button id="loginButton" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      )}
      {logOut && (
        <div className="questionContainer">
          <div className="question">Would you like to Log Out?</div>
          <div className="logoutOptions">
            <button onClick={() => openModel()} className="yesbuttonOptions">
              Yes
            </button>
            <button
              onClick={() => setLogOut(false)}
              className="nobuttonOptions"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginButton;
