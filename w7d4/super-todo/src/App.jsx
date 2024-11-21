import "./App.scss";
import TestComponent from "./components/Test";
import TodoForm from "./components/TodoForm";
import TodoListItem from "./components/TodoListItem";
import Header from "./components/Header";

// Supports weights 100-900
import "@fontsource-variable/roboto-slab";
// Supports weights 100-900
import "@fontsource-variable/montserrat";
import TodoList from "./components/TodoList";
import { todosPain } from "./data/todoData";
import { useState } from "react";

function App() {
  // const sampleTodo = {
  //   id: 2,
  //   task: "Buy Xenoblade Chronicles X",
  //   dueDate: "2025-03-03",
  //   color: "#BADA55",
  //   isComplete: true,
  // };

  // const confirmBehavior = (formData) => console.log("FORM TRIGGERED!", formData)

  // return <TodoListItem {...sampleTodo} toggleCompletion={confirmBehavior} />
  // return (

  // )

  // return <TodoForm onSubmit={confirmBehavior}/>
  // return <Header />

  // return (
  //   <TodoList todos={todosPain} toggleCompletion={(todoId) => console.log(todoId)} />
  // );

  const [todos, setTodos] = useState(todosPain) 

  const addTodo = (formData) => {
    const newTodo = {...formData, id:todos.length + 1, isComplete:false }

    const updatedTodos = [newTodo, ...todos]

    // NETWORK API CALL
    // WHEN HAPPY

    setTodos(updatedTodos)
  }

  const toggleCompletion = (todoId) => {
    const updatedTodoIndex = todos.findIndex(todo => todo.id === todoId)
    const updatedTodo = {...todos[updatedTodoIndex]}

    updatedTodo.isComplete = !updatedTodo.isComplete

    const updatedTodos = [...todos]
    updatedTodos[updatedTodoIndex] = updatedTodo

    setTodos(updatedTodos)
  }

  return <>
    <Header />
    <TodoForm onSubmit={addTodo}/>
    <TodoList todos={todos} toggleCompletion={toggleCompletion}/>
  </>
}

export default App;
