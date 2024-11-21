import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import '@fontsource-variable/roboto-slab';
// Supports weights 100-900
import '@fontsource-variable/montserrat';

function App() {

  return (
    <>
      <Header />
      <TodoForm />
      <TodoList />
    </>
  )
}

export default App
