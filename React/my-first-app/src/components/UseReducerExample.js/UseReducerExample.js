import React,{useReducer} from 'react'

const UseReducerExample = () => {
    // const [isOn , setIsOn] = useState(false);
    
    // const [counter, setCounter] = useState(0);
    const reducer = (state,action)=>{
        switch(action.type){
            case "toggle":
                return {...state,isOn:!state.isOn}
            case "increase":
                return {...state,counter: state.counter +1}
            case "decrease":
                return {...state,counter: state.counter -1}
            case "increaseBy10":
                return {...state,counter: state.counter +10}
            default:
                return state
        }
    }
    const [myState,dispatch] = useReducer(reducer,{isOn:false,counter:0})

  return (

    <>
       <button onClick={()=>{
        dispatch({type:"increaseBy10"})
       }}>Inc</button>
       <span>{myState.counter}</span>
       <button onClick={()=>{
        dispatch({type:"decrease"})
       }}>Dec</button>
       <br/>
       <button onClick={()=>{
        console.log(myState.isOn);
        dispatch({type:"toggle"}
        
        )
       }}>{myState.isOn?"On":"Off"}</button>
    </>

  )
}

export default UseReducerExample