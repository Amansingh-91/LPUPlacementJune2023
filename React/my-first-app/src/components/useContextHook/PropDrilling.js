import React, { useState } from 'react'

const PropDrilling = () => {
  return (
    <User/>
  )
}
const Login = (props)=>{
    return (
        <>
        
        <button onClick={()=>{
            props.setIsLoggedIn(true)
        }}>Login</button>
        </>
    )
}

const LogOut = (props)=>{
    return (
        <button onClick={()=>{
            props.setIsLoggedIn(false);
        }}>LogOut</button>
    )
}
const Payment =(props)=>{
    return (
        <>
        {props.isLoggedIn? <Payment/>:<Login setIsLoggedIn={props.setIsLoggedIn}/>}
        {props.isLoggedIn && <LogOut setIsLoggedIn={props.setIsLoggedIn}/>}
        </>
    )
}
const Address =(props)=>{
    return (
        <>
        {props.isLoggedIn? <Payment/>:<Login setIsLoggedIn={props.setIsLoggedIn}/>}
        {props.isLoggedIn && <LogOut setIsLoggedIn={props.setIsLoggedIn}/>}
        </>
    )
}


const Cart =(props)=>{
    return (
        <>
        {props.isLoggedIn? <Address/>:<Login setIsLoggedIn={props.setIsLoggedIn}/>}
        {props.isLoggedIn && <LogOut setIsLoggedIn={props.setIsLoggedIn}/>}
        </>
    )
}

const User = ()=>{
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    return(
        <>
        {isLoggedIn? <Cart isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>:<Login setIsLoggedIn={setIsLoggedIn}/>}
        
        </>
    )

}






export default PropDrilling