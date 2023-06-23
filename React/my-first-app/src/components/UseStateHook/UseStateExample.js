import React, { useState } from 'react'


const UseStateExample = () => {
    // console.log(useState(0));
    //100
    let [counter, setCounter] = useState(0);
    const increase  = e=>{
        
        setCounter(counter +1);
    }
    const decrease = e=>{
        
        setCounter((prev)=>{
            return prev -1;
        });
    }
  return (

    <>
       <button onClick={increase}>Inc</button>
       <span>{counter}</span>
       <button onClick={decrease}>Dec</button>
    </>

  )
}

export default UseStateExample