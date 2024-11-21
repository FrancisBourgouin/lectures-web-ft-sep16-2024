import TodoListItem from "./TodoListItem";

export default function TodoList(props){
  
  return (
    <section className="TodoList">
      <TodoListItem color="#BADA55"/>
      <TodoListItem color="#B4D"/>
      <TodoListItem color="#B0B"/>
      <TodoListItem color="#B0B"/>
      <TodoListItem color="#B0B"/>
      <TodoListItem color="#B0B"/>
      <TodoListItem color="#B4D"/>
      <TodoListItem color="#BADA55"/>
      <li className="TodoListItem" style={{"--todo-color":props.color}}>
      <button>⬆️</button>
      <p>Watch Nightmare Before Christmas</p>
      <p>2024-11-02</p>
    </li>
    <li className="TodoListItem complete" style={{"--todo-color":props.color}}>
      <button>⬆️</button>
      <p>Watch Nightmare Before Christmas</p>
      <p>2024-11-02</p>
    </li>
    <li className="TodoListItem complete" style={{"--todo-color":props.color}}>
      <button>⬆️</button>
      <p>Watch Nightmare Before Christmas</p>
      <p>2024-11-02</p>
    </li>
    <li className="TodoListItem complete" style={{"--todo-color":props.color}}>
      <button>⬆️</button>
      <p>Watch Nightmare Before Christmas</p>
      <p>2024-11-02</p>
    </li>
    <li className="TodoListItem complete" style={{"--todo-color":props.color}}>
      <button>⬆️</button>
      <p>Watch Nightmare Before Christmas</p>
      <p>2024-11-02</p>
    </li>
    </section>
  )
}