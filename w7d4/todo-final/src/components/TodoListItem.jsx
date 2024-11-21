export default function TodoListItem(props){
  
  return (
    <li className="TodoListItem" style={{"--todo-color":props.color}}>
      <button>⬆️</button>
      <p>Watch Nightmare Before Christmas</p>
      <p>2024-11-02</p>
    </li>
  )
}

