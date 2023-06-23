import React,{useState} from 'react'

const UseStateComplexExample = () => {
    let [counter, setCounter] = useState(0);
    const increase  = e=>{
        
        setCounter(prev=>{
            return prev +1;
        });
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
        <h1>Complex Counter </h1>
       <button onClick={()=>{
        console.log("click");
        setTimeout(increase,3000)}}>Inc</button>
       <span>{counter}</span>
       <button onClick={()=>{
        setTimeout(decrease,3000)}}>Dec</button>
    </>

  )

}





export default UseStateComplexExample