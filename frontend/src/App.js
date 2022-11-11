import React from 'react'
import { Link } from "react-router-dom"

export const App = () => {
  return (
    <div className='navBar'>
      <Link to="register">Register</Link>
      <Link to="login">Login</Link>
    </div>
  )
}
