import React, { useState } from "react";

function Deposit() {
  const [apiData, setApiData] = useState("");

  const apiUrl =
    "https://demo.castorcredit.com/dashboard/api/usd_balance.php?address=0xA5a798128eDB9846BD4e78b2031CA7bBC97D4B3B";

  const fetchData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Deposit Balance</button>
      {apiData ? (
        <pre>{JSON.stringify(apiData)}</pre>
      ) : (
        <p>Click the button to load data.</p>
      )}
    </div>
  );
}

export default Deposit;
