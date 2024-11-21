export default function Header(props) {
  return (
    <header className="Header">
      <div>
        <h1>Super Todo List Of Darkness!</h1>
        <h2>{new Date().toLocaleDateString()}</h2>
      </div>
    </header>
  );
}
