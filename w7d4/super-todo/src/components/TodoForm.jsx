// Props
// onSubmit action

import { useState } from "react";


export default function TodoForm(props) {
  // const [todoName, setTodoName] = useState("")

  const initialFormData = {
    task:"",
    color:"",
    dueDate:""
  }

  const [formData, setFormData] = useState(initialFormData)


  const handleChange = event => {
    const {value, name} = event.target

    const updatedFormData = {...formData}
    updatedFormData[name] = value

    setFormData(updatedFormData)

    // setFormData({...formData, [name]:value})
  }

  const handleSubmit = event => {
    event.preventDefault()

    props.onSubmit(formData)

    setFormData(initialFormData)
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="text" name="task" placeholder="Enter task info" value={formData.task}  onChange={handleChange}/>
      <div>
        <select name="color" value={formData.color} onChange={handleChange}>
          <option value="#4bbdf1">Uncategorized</option>
          <option value="#bada55">Personal</option>
          <option value="#b0b">Work stuff</option>
        </select>
        <input type="date" name="dueDate" placeholder="Enter due date"value={formData.dueDate}  onChange={handleChange}/>
      </div>
      <button>Add todo!</button>
    </form>
  );
}
