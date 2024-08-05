import React from 'react'
import styles from "./Search.module.scss"
const Search = ({setSearch,setPageNumber}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
  
  }
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5' onSubmit={handleSubmit}>
      <input type="text" className={`${styles.input}`} onChange={(e) => { 
        setPageNumber(1)
        setSearch(e.target.value)}}  placeholder='Search for characters'/>
      <button type='submit' className={`btn ${styles.btn} btn-primary fs-5`}>Search</button>
    </form>
  )
}

export default Search