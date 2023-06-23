import React from 'react'
import { useOutletContext } from 'react-router-dom'

const BookList = () => {
    const {hello} = useOutletContext();
  return (
    <>
    <div>BookList {hello}</div>

    
    </>
  )
}

export default BookList