const initialState = [];

const userListReducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD":
            // console.log(action.payload);
            const newState = [...state,action.payload];
            // console.log(newState);
            return newState;
        case "Remove":
            if(state.length >0){
                state.filter(user=>!user.email === action.payload.email)
            }else{
                return state
            }
        default : 
            return state
    }
}
export default userListReducer;