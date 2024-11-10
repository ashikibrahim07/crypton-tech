import React, { useState, useEffect } from "react";
import WidgetOrderStats from "./components/WidgetOrderStats";

const App = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setStats(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <WidgetOrderStats stats={stats} />
    </div>
  );
};

export default App;
