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

      <img src="/images/home_bg.png" alt="Random Fact" className="main-image" />
          <p className="fact-text">{fact}</p>
      {loading && <p>Loading...</p>}

      <button onClick={fetchFact} className="button-fact">
        🔄 New Fact
      </button>
      <p className="fact-count-text">🚀 {count} fact{count>1 && "s"} down — keep levelling up!</p>
  
    </div>
  );
}

export default App;