import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState("");

  const handleLogin = async () => {
    const data = await axios
      .get(
        "https://demo.castorcredit.com/dashboard/api/login.php?address=0xA5a798128eDB9846BD4e78b2031CA7bBC97D4B3B"
      )
      .then((response) => setLoginData(response.data))
      .catch((err) => console.log(err));
      
  };

  return (
    <>
      <button type="button" onClick={handleLogin}>
        User Login
      </button>
      {loginData ? (
        <pre>{JSON.stringify(loginData)}</pre>
      ) : (
        <p>Click the button to load data.</p>
      )}
    </>
  );
};

export default Login;
