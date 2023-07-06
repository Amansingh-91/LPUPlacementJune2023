const initialState = false;
const userReducer = (state = initialState,action)=>{

    switch(action.type){
        case "LOGIN":
            console.log("successfully logged in");
            return  true;
        case "LOGOUT":
            return  false;
        case "SIGNUP":
            return true;
        default:
            return state;
    }
}
export default userReducer;