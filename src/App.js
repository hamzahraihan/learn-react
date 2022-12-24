import "./App.css";
import { planets } from "./Planet";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="App">
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <h1>{planet.name}</h1>;
      })}
    </div>
  );
}

export default App;
