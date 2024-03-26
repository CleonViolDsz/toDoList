import React,{useState} from "react";

export default function ToDoList(){

  const [tasks, setTasks] = useState(["Eat breakfast","Take a shower","walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){
    if(newTask.trim()!==""){
      setTasks(t => [...tasks, newTask])
    setNewTask("");
    }
    
  }

  function deleteTask(index){
    const updatedTasks = tasks.filter((_,i) => i!== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  return(
    <div className="to-do-list">
      <h1>TO DO LIST</h1>

      <div>
        <input 
          type="text"
          placeholder="Enter a task.."
          value={newTask}
          onChange={handleInputChange}
         />
         <button className="add-btn"
          onClick={addTask}
         >
          Add
         </button>
      </div>

      <ol>
        {tasks.map((task, index)=>
        <li key={index}>
          <span className="text">{task}</span>
          <button className="delete-btn"
          onClick={() => deleteTask(index)}
          >Delete</button>

          <button className="move-btn"
          onClick={() => moveTaskUp(index)}
          >&#128070;</button>

          <button className="move-btn"
          onClick={() => moveTaskDown(index)}
          >&#128071;</button>
        </li>
        )}
      </ol>
    </div>
  )
}