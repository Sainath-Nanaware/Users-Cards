import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <Link to={"/"}>Home</Link>
    </div>
  )
}

export default PageNotFound
