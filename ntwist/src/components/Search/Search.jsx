import React from 'react'
import{IoMdClose}from "react-icons/io"
import "./search.css"
import { GoSearch } from 'react-icons/go'
const Search = ({setSearch}) => {
  return (
    <div className='search-wrapper'>
      <div className="search-inner" >
     <div className='head-search'>
     <IoMdClose className='io1' onClick={()=>setSearch(false)}/>
     </div>
    <div className="input-field"> <input type="text" name="" id="" /><GoSearch className='io1'/></div>
      </div>
    </div>
  )
}

export default Search
