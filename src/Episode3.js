// Latihan 2

export const planets = [
  { name: "mars", isGasPlanet: false },
  { name: "jupiter", isGasPlanet: true },
  { name: "earth", isGasPlanet: false },
  { name: "venus", isGasPlanet: false },
  { name: "neptune", isGasPlanet: true },
  { name: "uranus", isGasPlanet: true },
];

function App() {
  const planets = [
    { name: "mars", isGasPlanet: false },
    { name: "jupiter", isGasPlanet: true },
    { name: "earth", isGasPlanet: false },
    { name: "venus", isGasPlanet: false },
    { name: "neptune", isGasPlanet: true },
    { name: "uranus", isGasPlanet: true },
  ];
  return (
    <div className="App">
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <h1>{planet.name}</h1>;
      })}
    </div>
  );
}

export default App;
