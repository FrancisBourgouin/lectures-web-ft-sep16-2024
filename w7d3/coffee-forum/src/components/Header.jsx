export default function Header(props) {
  const { amountOfUsers } = props;
  
  return (
    <header className="Header">
      <h1>COFFEE FORUM OF DESTINYYY</h1>
      <h2>Serving {amountOfUsers} users online!</h2>
    </header>
  );
}
