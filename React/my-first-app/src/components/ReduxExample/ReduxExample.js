import React from 'react'

import {useSelector,useDispatch} from "react-redux";
import {actions} from "../../actions/index";


const ReduxExample = () => {
    const changeTheCount = useSelector((state) => state.changeTheCount);
    console.log(actions);
    const dispatch = useDispatch();
  return (

    <>
       <button onClick={()=>{dispatch({type:"INCREMENT",payload:10})}}>Inc</button>
       <span>{changeTheCount}</span>
       <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Dec</button>
    </>

  )
}

export default ReduxExample;