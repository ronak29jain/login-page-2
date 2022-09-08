import React from 'react'
import { UserAuth } from '../context/Authcontext'
import { Navigate } from 'react-router-dom'
import './Styles/Styles.css'

function ProjectHomePage() {
  
  const { user } = UserAuth();

  if (user) {
    return <Navigate to='/home' />
  }
  
  return (
    <div className='projecthomepage'>
      <h1>Login Page 2</h1>
    </div>
  )
}

export default ProjectHomePage