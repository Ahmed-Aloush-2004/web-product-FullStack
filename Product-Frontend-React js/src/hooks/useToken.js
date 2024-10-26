import React from "react";

function useToken() {

  let token = localStorage.getItem("token");
  
  // Only parse if the token exists
  token = token ? JSON.parse(token) : "";

  function setToken(tokenValue) {
    localStorage.setItem("token", JSON.stringify(tokenValue));
  }

  return [token, setToken];
}

export default useToken;
