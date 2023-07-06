import { login,logout,signup } from "./userActions";
import { addUser,removeUser } from "./userListActions";
const actions = {
    userActions : {login,logout,signup},
    userListActions : {addUser,removeUser},
}
return actions;