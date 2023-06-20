import React, { useState } from "react";

// useState Hook


const EventListenerDemo = ()=>{
    
    // let titleOfPage = "Synthetic Event";
    let x= true;
    // 200
    let [titleOfPage,setTitleOfPage] = useState("Synthetic Event");
    const handleClick = (event)=>{
        
        setTimeout(()=>{
            console.log("event obj",event);
        },10);
        console.log(event.target.tagName);
        if(x){
            // 400
            setTitleOfPage("My Event");
            x = false;
            event.stopPropagation();
        }
        else{
            // 700
            // titleOfPage = "Synthetic Event";
            setTitleOfPage((prev)=>{
                console.log("prev", prev);
                return "Synthetic Event";
            })
            x= true;
        }
        // console.log(titleOfPage);
    }
    return (
        <center onClick={(e)=>{
            e.stopPropagation();
            e.preventDefault();
            console.log("Logout");
        }}>
        <h1 onClick={handleClick} >{titleOfPage}</h1>
        </center>
    );
}

export default EventListenerDemo;