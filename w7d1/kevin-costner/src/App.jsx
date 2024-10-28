import "./App.scss";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import PlantListItem from "./components/PlantListItem";
import { plantsArr } from "./data/plantData";
import { checkIfWellWatered } from "./helpers/dateHelpers";

function App() {
  const parsedPlants = plantsArr.map((plant) => ({
    ...plant,
    isWellWatered: checkIfWellWatered(plant.wateringInterval, plant.lastWatered),
  }));

  const amountOfHappyPlants = parsedPlants.filter((plant) => plant.isWellWatered).length;

  return (
    <div className="App">
      <Header amountOfHappyPlants={amountOfHappyPlants} />
      <main>
        <h1>List of plants</h1>
        <section>
          <h1>FEATURED PLANT!</h1>
          <PlantListItem {...parsedPlants[2]} />
        </section>
        <PlantList plants={parsedPlants} />
      </main>
    </div>
  );
}

export default App;
