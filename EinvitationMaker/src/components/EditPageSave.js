import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function EditPageSave({ handleDownload }) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <button id="loginButton" onClick={() => handleDownload()}>
          Save
        </button>
      ) : (
        <div>
          <button id="loginButton" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
}
