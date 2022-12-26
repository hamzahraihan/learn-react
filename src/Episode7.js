import "./App.css";
import Axios from "axios";
import { useEffect, useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };
  return (
    <div className="App">
      <input
        placeholder="Ex. Pedro..."
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Generate Cat Fact</button>
      <p> Name: {predictedAge?.name}</p>
      <p> Predicted Age: {predictedAge?.age}</p>
      <p> Count: {predictedAge?.count}</p>
    </div>
  );
}

export default App;
