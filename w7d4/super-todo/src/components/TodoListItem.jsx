// TodoListItem

// Props:
// Border color (--todo-color)
// Completed or not
// const sampleTodo = {
//   id: 2,
//   task: "Buy Xenoblade Chronicles X",
//   dueDate: "2025-03-03",
//   color: "blue",
//   isComplete: true,
// };
// toggleCompletion as a function


export default function TodoListItem(props){

  const classnames = ["TodoListItem", props.isComplete ? "complete" : ""]
  
  return (
    <li className={classnames.join(" ")} style={{"--todo-color": props.color}}>
      <button onClick={props.toggleCompletion}>⬆️</button>
      <p>{props.task}</p>
      <p>{props.dueDate}</p>
    </li>
  )
}