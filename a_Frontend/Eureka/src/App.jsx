import React, { useState } from "react";

import Login from "../../../ABES-CE(2025-26)/BookApp/src/components/Login";
import Register from "../../../ABES-CE(2025-26)/BookApp/src/components/Register";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  let title;
  let form;
  let toggleText;
  let buttonText;

  if (isLogin) {
    title = "Login";
    form = <Login />;
    form = <Login/>;
    toggleText = "Don't have an account?";
    buttonText = "Register";
  } else {
    title = "Register";
    form = <Register/>;
    toggleText = "Already have an account?";
    buttonText = "Login";
  }

  return (
    <div>
      <center>
        <h2>{title}</h2>
      </center>

      {form}

      <p>
        {toggleText}
        <button onClick={() => setIsLogin(!isLogin)}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default App;
