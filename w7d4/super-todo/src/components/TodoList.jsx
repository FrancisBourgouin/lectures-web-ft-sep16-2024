import TodoListItem from "./TodoListItem";

export default function TodoList(props) {

  if(!props.todos){
    return <section>OH MY GOD ! (╯°□°）╯︵ ┻━┻</section>
  }

  const parsedTodos = props.todos.map((todo) => (
    <TodoListItem
      key={todo.id}
      {...todo}
      toggleCompletion={() => props.toggleCompletion(todo.id)}
    />
  ));

  return <section className="TodoList">{parsedTodos}</section>;
}
