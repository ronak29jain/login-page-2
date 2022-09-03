import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home'
import AddingProfile from '../Register/AddingProfile';
import SignIn from '../SignIn/SignIn'
import Register from '../Register/Register'
import ForgotPassword from '../Forgot_Password/ForgotPassword';
import Account from '../Account/Account';

import { UserAuth } from '../../context/Authcontext'

function Body() {

  const [route, setRoute] = useState('signin')
  const { user } = UserAuth();

  useEffect(() => {
    (user)  
      ? ( user.emailVerified ? setRoute('home') : setRoute('addProfile') )
      : setRoute('signin')
  }, [user])

  const displayPage = (page) => {
    switch (page) {
      case "home": 
        return <Home />;
      case "signin": 
        return <SignIn setRoute={setRoute} />;
      case "register": 
        return <Register />;
      case "addProfile":
        return <AddingProfile />;
      case "forgotPassword":
        return <ForgotPassword setRoute={setRoute} />
      case "account":
        return <Account />
      default: 
        return <SignIn setRoute={setRoute} />;
    }
  }

  return (
    <div>
      <Navigation route={route} setRoute={setRoute}/>
      {displayPage(route)}
    </div>
  )
}

export default Body