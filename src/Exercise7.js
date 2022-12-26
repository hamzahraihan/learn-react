import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const [generateExcuse, setGenerateExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setGenerateExcuse(res.data[0].excuse);
    });
  };
  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <br />
      <p>{generateExcuse}</p>
    </div>
  );
}

export default App;
