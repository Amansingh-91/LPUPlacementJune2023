import React from 'react';
import Book from "./book";
import data from "./bookData";
const handleClick = (e)=>{
    console.log(e);
    e.preventDefault();
    if(e.target.tagName ==="H1"){
        console.log(e.target.textContent);
    }
}
const BookList = ()=>{
    
    return (
      <section className="booklist" onClick={handleClick}>
        {/* <Book image={firstBook.image} author={firstBook.author} title={firstBook.title}/>
        <Book {...secondBook}/> */}
        {
            data.map(book => {
                return <Book {...book} key={book.id}>{/*1200*/}</Book>
            })
        }
        
    </section>
  
    )
  }

export default BookList;