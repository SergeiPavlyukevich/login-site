import React, { useState } from "react";

import "./Login.css";

function sendRequest(login, password) {
  return fetch("http://localhost:8000/login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export default function Login() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="loginWrapper">
      <div className="loginLeftMainImg" />
      <div className="loginRightSite">
        <div className="loginBody">
          <div className="formGroup">
            <input type="text" className="formInput" placeholder=" " onChange={(e) => setLogin(e.target.value)}/>
            <label className="formLabel">Username or Email Address</label>
          </div>
          <div className="formGroup">
            <input type="password" className="formInput" placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
            <label className="formLabel">Password</label>
          </div>
          <div className="footer">
            <div className="checkbox">
              <input type="checkbox" />
              <div>Remember Me</div>
            </div>
            <button className="formButton" onClick={() => sendRequest(login, password)}>
              Log in
            </button>
          </div>
        </div>
        <div className="underLogin">
          <div>Lost your password?</div>
          <div>Register</div>
        </div>
      </div>
    </div>
  );
}




