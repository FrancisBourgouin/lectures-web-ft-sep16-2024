export default function PlantListItem(props) {
  const {name, type, lastWatered, isWellWatered} = props

  const className = `PlantListItem ${isWellWatered ? "happy" : "sad"}`

  return (
    // <article className="PlantListItem happy"></article>
    // <article className="PlantListItem sad"></article>
    <article className={className}>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>Last watered on: {lastWatered}</h2>
    </article>
  );
}


// export default function PlantListItem(props) {
//   return (
//     // <article className="PlantListItem happy"></article>
//     // <article className="PlantListItem sad"></article>
//     <article className="PlantListItem">
//       <h1>{props.name}</h1>
//       <h2>{props.type}</h2>
//       <h2>{props.wateringInterval}</h2>
//     </article>
//   );
// }
