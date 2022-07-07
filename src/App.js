import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 9) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="holder">
          <h1>
            React <span className="font-light">Counter.</span>
          </h1>
          <div className="row">
            <div onClick={decrement} className="smallCircle">
              -
            </div>
            <div className="counterholder">{count}</div>
            <div onClick={increment} className="smallCircle">
              +
            </div>
          </div>
          <p className="credits">Coded with love 💖</p>
        </div>
      </header>
    </div>
  );
}

export default App;
