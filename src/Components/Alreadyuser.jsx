import React, { useState } from "react";
import axios from "axios";

const Alreadyuser = () => {
  const [alreadyUser, setAlreadyUser] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        'https://demo.castorcredit.com/dashboard/api/register.php?address=0xA5a798128eDB9846BD4e78b2031CA7bBC97D4B3B&refid=123456'
      );
      const userData = response.data; // Assuming the API returns user data
      setAlreadyUser(userData); // Update the state with user data
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={handleSubmit}>Login User</button>
      <p>Already User</p>
      {alreadyUser ? (
        <pre>{JSON.stringify(alreadyUser, null, 2)}</pre>
      ) : (
        <p>No user info available.</p>
      )}
    </>
  );
};

export default Alreadyuser;
