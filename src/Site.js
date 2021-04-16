import React from "react";

export default function Site() {
  return (
    <div className="loginWrapper">
      <div className="loginMainImg" />
      <div className="loginBody">
        <div className="login">
          <div>
            <div>Username or Email Address</div>
            <input type="text" />
          </div>
          <div>
            <div>Password</div>
            <input type="text" />
          </div>
          <div className="checkAndLog">
            <input type="checkbox" />
            <div className="checkRemember">Remember Me</div>
            <button>Log in</button>
          </div>
        </div>
        <div className="lettering">
          <a href="#">Lost your password?</a>
        </div>
        <div className="lettering">
          <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
}
