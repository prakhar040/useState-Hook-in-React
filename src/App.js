import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";

function App() {
  const [num, setNum] = useState(1);

  function inc() {
    setNum(num + 1);
  }

  function dec() {
    setNum(num - 1);
  }

  return (
    <div className="App">
      <Header />

      <div className="main">
        <h1 className="heading">{num}</h1>
        <div className="buttons">
          <button className="btn" onClick={inc}>
            <h1>Increment</h1>
          </button>
          <button className="btn" onClick={dec}>
            <h1>Decrement</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
