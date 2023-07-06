import { incCount,desCount } from "./CounterActions";
import { login,logout } from "./UserAction";
const actions = {
    counterActions:{incCount,desCount},
    userActions:{login,logout},
}

export {actions};