// src/App.js
import React, { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://192.168.0.23:3000/"); // NestJS 서버의 루트 경로로 API 요청
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>CI CD dev 환경 </h1>
    </div>
  );
}

export default App;
