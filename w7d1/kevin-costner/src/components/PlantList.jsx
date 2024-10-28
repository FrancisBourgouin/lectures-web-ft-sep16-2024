import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  // parsing / rendering
  const { plants } = props;

  const parsedPlants = plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);

  console.log(parsedPlants);
  return (
    <section className="PlantList">
      {/* <PlantListItem
        name={plant1.name}
        type={plant1.type}
        lastWatered={plant1.lastWatered}
        wateringInterval={plant1.wateringInterval}
      />
      <PlantListItem key="value" />
      <PlantListItem {...plant1} /> */}
      {parsedPlants}
    </section>
  );
}
