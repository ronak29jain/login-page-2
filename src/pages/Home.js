import React from 'react'
import { UserAuth } from '../context/Authcontext'
import { Navigate } from 'react-router-dom';
import './Styles/Styles.css'

function Home() {

  const { user } = UserAuth();

  if (!((user?.displayName) && (user?.emailVerified))) {
    return <Navigate to='/adding-profile' />
  }

  return (
    <div className='home'>
      <h1><span className='heading'> Home</span></h1>
      <h3><span className='heading'>Name:</span>{user?.displayName} </h3>
      <h3><span className='heading'>Email:</span> {user?.email} </h3>
      {/* <h3>PhotoUrl: {user?.photoURL} <img src="{user?.photoURL}" alt="profile" /> </h3> */}
      <h3><span className='heading'>Phone Number :</span> {user?.phoneNumber} </h3>
      <h3><span className='heading'>Verified Email :</span> {user?.emailVerified ? 'true' : 'false'} </h3>
      {/* <h3>UID : {user?.uid} </h3> */}
    </div>
  )
}

export default Home