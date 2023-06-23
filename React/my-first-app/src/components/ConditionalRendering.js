import React, { useState } from 'react'

const ConditionalRendering = () => {
    const logout = "LogOut";
    const login = "Login";
    let [isLoggedIn,setIsLoggedIn] = useState(Boolean(false));
  return (

    <div>
        {/* <h1>{isLoggedIn || login}</h1>
        <h1>{!isLoggedIn || logout}</h1> */}
        {/* <h1>{isLoggedIn && login}</h1>
        <h1>{!isLoggedIn && logout}</h1> */}
        {/* <h1>{isLoggedIn?logout:login}</h1> */}
        <h1 onClick={(e)=>{
            console.log("event");
            setIsLoggedIn((prev)=>{
                console.log(prev);
                if(prev){
                    return false;
                }
                return true;
            });
        }}>btn</h1>
    </div>
  )
}


export default ConditionalRendering;