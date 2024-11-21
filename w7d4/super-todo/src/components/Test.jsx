export default function TestComponent(props) {
  const { list } = props;

  if (!Array.isArray(list)) return <li>WTH</li>;

  const parsedList = list.map((item) => <li>{item}</li>);

  return (
    <div>
      <h1>List!</h1>
      <ul>{parsedList}</ul>
    </div>
  );
}
