import React from 'react'
import {Routes,Route,Link} from "react-router-dom";
import LogIn from './components/login';
import SignUp from './components/SignUp';
import Products from "./components/products";
const App = () => {
  return (

    <>
      <nav>
        <ul>
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/signup">SignUp</Link>
          </li>
          <li>
          <Link to="/products">product</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/'/>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/signup' element = {<SignUp/>}></Route>
        <Route path='/products' element = {<Products/>}></Route>
      </Routes> 
    </>
  )
}

export default App;