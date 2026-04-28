import { useState } from "react";
import "./App.css";
import Main from "./main/main";
import Header from "./header/header";

function App() {
  const [weatherData, setWeather] = useState({ type: "hot" });
  return (
    <div className="page">
      <div className="page_content">
        <Header />
        <Main weatherData={weatherData}/>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
