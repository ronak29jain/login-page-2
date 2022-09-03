import React, { useState } from 'react'
import { UserAuth } from '../../context/Authcontext'
import GoogleButton from 'react-google-button'
import './login.css'

function SignIn({ setRoute }) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const { googleSignIn, signIn } = UserAuth()

  const signInWithGoogle = async() => {
    try {
      await googleSignIn();
      console.log('user is signed in using google "SignIn.js".')
    } catch (err) {
      console.log('error in signInWithGoogle function from "Signin.js" file', err)
    }
  }

  const logIn = async() => {
    setLoginError('')
    try{
      await signIn(email, password);
    } catch(err) {
      console.log('error in logIn function from "Signin.js" file: ', err.message)
      setLoginError(err.message)
    }
  }

  const whenEnter = (event) => {
    if (event.key === 'Enter') {
      logIn ();
    }
  }

  return (
    <div className='signin center'>
      <article className="signin-form center">
          <div>

            <fieldset className="fieldset">
              
              <legend className="legend">Sign In</legend>
              
              <div className="input-section">
                <label className="label" htmlFor="email-address">Email</label>
                <input className="input" type="email" onKeyPress={whenEnter} name="email-address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              
              <div className="input-section">
                <label className="label" htmlFor="password">Password</label>
                <input className="input" type="password" onKeyPress={whenEnter} name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              
              <h5 className='error'>{loginError}</h5>

            </fieldset>

            <div className="input-section">
              <input onClick={() => logIn(email, password)} className="submit" type="submit" value="Sign in"/>
            </div>
            <hr/>
            <div className="signinwithgoogle center">
              <GoogleButton onClick={signInWithGoogle} className='pointer' />
            </div>


            <div className="sign-in-footer">
              <p>
                <a onClick={() => setRoute('forgotPassword')} href="#0" className="footer-link">Forgot Password ?</a>
              </p>
              <p className='donot-have-an-account'>
                <span> Don't have an account? </span> 
                <a onClick={() => setRoute('register')} href="#0" className="footer-link"> Sign up </a>
              </p>
            </div>

          </div>
      </article>
    </div>
  )
}

export default SignIn