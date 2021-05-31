import React, { useState } from "react";

import "./Register.css";

function sendRequest(login, password, email) {
  return fetch("http://localhost:8000/register", {
    method: "POST",
    body: JSON.stringify({login, password, email}),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export default function Register() {
  const [login, setLogin] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="registerWrapper">
      <div className="registerLeftMainImg" />
      <div className="registerRightSite">
        <div className="registerBody">
          <div className="formGroup">
            <input type="text" className="formInput" placeholder=" " onChange={(e) => setLogin(e.target.value)}/>
            <label className="formLabel">Login</label>
          </div>
          <div className="formGroup">
            <input type="text" className="formInput" placeholder=" " onChange={(e) => setEmail(e.target.value)}/>
            <label className="formLabel">Email</label>
          </div>
          <div className="formGroup">
            <input type="password" className="formInput" placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
            <label className="formLabel">Password</label>
          </div>
          <div className="formGroup">
            <input type="password" className="formInput" placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
            <label className="formLabel">Reenter password</label>
          </div>
          <div className="footer">
            <div className="checkbox">
              <input type="checkbox" />
              <div>Remember Me</div>
            </div>
            <button className="formButton" onClick={() => sendRequest(login, password, email)}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


