import React, { useEffect,useState } from 'react'

const UseEffectExapmlpe = () => {
    let [count,setCount] = useState(0);
    
    let [data,setData] = useState(null);
    useEffect(()=>{
        console.log("in use Effect");
        fetch("https://jsonplaceholder.typicode.com/todos").then(res=>{
            return res.json();
        }).then(data=>{
            setData(data);
        });
    },[count]);
    const handleGetData = ()=>{
        console.log("changing count");
        setCount(count +1);
    }
  return (

    <>
        <h1>UseEffectExapmlpe</h1>
        <button onClick={handleGetData}>Get Data</button>
        {
            data && data.map(res=>{
                return <h1>{res.id}</h1>;
            })
        }

    </>

  )
}

export default UseEffectExapmlpe