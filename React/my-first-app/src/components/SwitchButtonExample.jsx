import React, { useState } from 'react'

const SwitchButtonExample = () => {
    const [isOn , setIsOn] = useState(false);
    const handleClick = (e)=>{
        if(isOn){
            e.target.parentElement.parentElement.parentElement.classList.add("night");
        }
        else{
            e.target.parentElement.parentElement.parentElement.classList.remove("night");
        }
        setIsOn(!isOn);
        console.log(isOn);
        
    }
  return (
    <div>
        <button onClick={handleClick}>{isOn?"On":"Off"}</button>
    </div>
  )
}

export default SwitchButtonExample