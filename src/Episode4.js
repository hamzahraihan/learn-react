import "./App.css";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      <h1>{inputValue}</h1>
    </div>
  );

  // example
  const [showText, setShowText] = useState(true);

  const [textColor, setTextColor] = useState("black");
  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show/Hide
      </button>
      {showText && <h1>HI MY NAME IS HAMZAH</h1>}

      <div>
        <button
          onClick={() => {
            setTextColor(textColor === "black" ? "red" : "black");
          }}
        >
          Change Color
        </button>
        <h1 style={{ color: textColor }}>COLOR CHANGER</h1>
      </div>
    </div>
  );

  //   exercise
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to 0</button>
      {count}
    </div>
  );
}

export default App;
