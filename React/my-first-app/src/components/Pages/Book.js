import React from 'react'
import { useParams } from 'react-router-dom'




const Book = () => {
    const {id} = useParams();
  return (
    <div>Book {id}</div>
  )
}

export default Book