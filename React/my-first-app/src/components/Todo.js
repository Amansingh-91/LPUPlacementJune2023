import React from 'react';
import { useState } from 'react';


const Todo = () => {
    let [number,setNumber] = useState(1);
    
    const handleClick =(e)=>{
        setNumber(++number);//number +1
        
    }
  return (
    <div>
        <h1 onClick={handleClick}>{number}</h1>
    </div>
  )
}

export default Todo;