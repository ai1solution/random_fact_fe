import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import AdBanner from "./AdBanner";

function App() {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:5000/fact");
      setFact(response.data.fact);
      setImageUrl(response.data.image_url);
      console.log(imageUrl)
    } catch (error) {
      console.error("Error fetching fact:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFact(); // Fetch fact on load
  }, []);

  return (
    <div className="App">
      <h1>🧠 Random Fact of the Day</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img src={imageUrl} alt="Random Fact" style={{ width: "400px", height: "300px", objectFit: "cover", borderRadius: "10px" }} />
          <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>{fact}</p>
        </>
      )}

      <button onClick={fetchFact} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "1rem", cursor: "pointer" }}>
        🔄 New Fact
      </button>
      {/* <AdBanner /> */}
    </div>
  );
}

export default App;
