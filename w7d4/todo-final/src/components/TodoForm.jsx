export default function TodoForm(props) {
  return (
    <form className="TodoForm">
      <input type="text" placeholder="Enter the task" />
      <div>
        <select name="category">
          <option value="#4bbdf1">Uncategorized</option>
          <option value="#4bbdf1">Work</option>
          <option value="#4bbdf1">Personal</option>
        </select>
        <input type="date" placeholder="Complete by" />
      </div>
      <button>Add task</button>
    </form>
  );
}
