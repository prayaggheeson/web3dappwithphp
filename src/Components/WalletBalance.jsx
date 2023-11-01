import React, { useState } from "react";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState(null);

  const apiUrl =
    "https://demo.castorcredit.com/dashboard/api/balance.php?address=0xA5a798128eDB9846BD4e78b2031CA7bBC97D4B3B";

  const fetchData = async () => {
    await axios
      .get(apiUrl)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Wallet Balance</button>
      {apiData ? (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      ) : (
        <p>Click the button to load data.</p>
      )}
    </div>
  );
}

export default App;
