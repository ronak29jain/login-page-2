import React, { useState } from 'react'
import { UserAuth } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

function Register() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signUpError, setSignUpError] = useState('')
  const { createUser } = UserAuth()
  const navigate = useNavigate();

  const signUp = async() => {
    setSignUpError('')
    try{
      await createUser(email, password).then(() => {navigate('/adding-profile')});
    } catch (err) {
      console.log('error in signUp function from "Register.js" file', err.message)
      setSignUpError(err.message)
    }
  }

  const whenEnter = (event) => {
    if (event.key === 'Enter') {
      signUp ();
    }
  }
  
  return (
    <div className='register center'>
      <article className="signin-form center">
          <div>
            <fieldset id="sign_up" className="fieldset">
              <legend className="legend">Sign Up</legend>
              <div className="input-section">
                <label className="label" htmlFor="email-address">Email</label>
                <input className="input" type="email" name="email-address"  id="email-address" onKeyPress={whenEnter}
                  value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="input-section">
                <label className="label" htmlFor="password">Password</label>
                <input className="input" type="password" name="password"  id="password" onKeyPress={whenEnter}
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <h5 className='error'>{signUpError}</h5>
            </fieldset>
            <div className="">
              <input onClick={signUp} className="submit" type="submit" value="Sign Up"/>
            </div>
          </div>
      </article>
    </div>
  )
}

export default Register