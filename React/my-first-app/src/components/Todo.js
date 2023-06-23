import React from 'react';
import { useState } from 'react';

import "./Todo.css";
import { data } from './TodoData';


const Todo = () => {
  
  const [tasks,setTasks] = useState(data);
  const [task,setTask] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(task.trim() !== ""){
     
      const newTask = {
          id:Date.now(),
          todo:task.trim(),
      }
      console.log(newTask);
      setTasks(prev=>{
        return [...prev,newTask];
  
      });
      
      
    }
    setTask("");
  }
    
  return (
    <div>
        <div className="container">
        <header>
            <h1>ToDo List</h1>
        </header>
        <input type="text" placeholder="Search" className="search"/>
        <ul>
            {tasks.map((task)=>{
              return <li key={task.id}>{task.todo}<span>X</span></li>;
            })}

            
        </ul>
        <form className="task" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add new Tasks" value={task} onChange={(e)=>{
              setTask(e.target.value);
            }}/>
        </form>
    </div>
    </div>
  )
}

export default Todo;