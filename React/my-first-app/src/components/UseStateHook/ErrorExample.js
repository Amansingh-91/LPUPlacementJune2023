import React from 'react'

const ErrorExample = () => {
    let title = "ErrorExample";
    const handleClick=(e)=>{
        title = "Random Title";
        console.log(title);
    }
  return (
    <h1 onClick={handleClick}>{title}</h1>
  )
}

export default ErrorExample