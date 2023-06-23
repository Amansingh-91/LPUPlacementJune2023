import React from 'react'

import { Routes,Route, Link } from 'react-router-dom'
// import BookList from "./components/booklist";
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import NotFound from './components/Pages/NotFound';
import Contact from './components/Pages/Contact';
import Book from './components/Pages/Book';
import BookList from './components/Pages/BookList';
import NewBook from './components/Pages/NewBook';
import BookLayout from './components/Pages/BookLayout';
const RouterDemo = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                {/* <li>
                    <Link to={"/book"}>Book</Link>
                </li> */}
                <li>
                    <Link to={"/books"}>BookList</Link>
                </li>
                
            </ul>
        </nav>
        <Routes>

            <Route path='/' element={<Home/>}></Route>
            
            {/* <Route path='/book' element={<Book/>}></Route>
            <Route path='/book/:id' element={<Book/>}></Route>
            <Route path='/book/new' element={<NewBook></NewBook>}></Route> */}

            {/* nested Routes */}
            <Route path='/books' element={<BookLayout/>}>
                <Route index element={<BookList></BookList>}></Route>
                <Route path=':id' element={<Book/>}></Route>
                <Route path='new' element={<NewBook></NewBook>}></Route>
            </Route>

            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
            

        </Routes>
    </>
  )
}

export default RouterDemo