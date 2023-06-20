import React, { Children } from 'react'


const Book = ({image, title, author,children}/*props*/)=>{// we can pass props or destructure the props
    // console.log(props);
    // console.log(children);
    // const {image, title, author} = props;
    const handleMouseOver= e=>{
    console.log(title);
    }
    return <div className="book" onMouseOver={handleMouseOver}>
       <img src ={image}  alt="Book image"/>
      <h1>{title}</h1>
     <h3>{author}</h3>
     
    
    </div>
  }

export default Book;