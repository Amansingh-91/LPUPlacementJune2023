

const initialState = 0;

const changeTheCount = (state =initialState,action )=>{

    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state -1;   
    
        default:
            return state;
            
    }
}

export default changeTheCount;