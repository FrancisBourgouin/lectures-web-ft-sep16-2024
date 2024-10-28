
export default function Header(props) {
  const { amountOfHappyPlants } = props;

  return (
    <header className="Header">
      <h1>Kevin's watering world</h1>
      <h2>Saving {amountOfHappyPlants} plants from dehydration</h2>
    </header>
  );
}
