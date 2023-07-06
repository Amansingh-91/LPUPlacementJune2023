import React ,{useState,useContext,createContext} from 'react';

const UserContext = createContext();
const Component3 =()=>{
    const isLoggedIn = useContext(UserContext);
    console.log(isLoggedIn);
    <>
        
    </>
}

const Component2 =()=>{
    return (
        <>
        <h1>Hello Component1</h1>
        <Component3/>
        </>
    )
}

const Component1 =()=>{
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    return(
    <>
    <UserContext.Provider value={isLoggedIn}>
        <h1>Hello Component1</h1>
        <Component2/>
    </UserContext.Provider>
    </>
    )
}


const useContextExample = () => {
  return (
    <div><Component1/></div>
  )
}



export default useContextExample