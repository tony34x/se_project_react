import "./App.css";
import Main from "./main/main";

import Header from "./header/header";

function App() {
  return (
    <div className="page">
      <div className="page_content">
        <Header />
        <Main />
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
