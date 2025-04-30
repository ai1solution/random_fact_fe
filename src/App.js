import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchFact = async () => {
    setLoading(true);
    setCount(count+1);
    try {
      const response = await axios.get("https://random-fact-be.onrender.com/fact");
      setFact(response.data.fact);
    } catch (error) {
      console.error("Error fetching fact:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFact(); // Fetch fact on load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <h1>🧠 Random Fact of the Day</h1>

      <img src="/images/home_bg.png" alt="Random Fact" style={{ maxWidth: "70%", objectFit: "cover", borderRadius: "10px" }} />
          <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>{fact}</p>
      {loading && <p>Loading...</p>}

      <button onClick={fetchFact} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "1rem", cursor: "pointer" }}>
        🔄 New Fact
      </button>
      <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>🚀 {count} fact{count>1 && "s"} down — keep levelling up!</p>
    </div>
  );
}

export default App;
