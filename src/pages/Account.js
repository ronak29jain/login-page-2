import React, { useState } from 'react'
import { UserAuth } from '../context/Authcontext'

function Account() {
  
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const { user, updateUserEmail, updateUserPassword, deleteAccount, userAuthentication } = UserAuth();

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [deleteAccountError, setDeleteAccountError] = useState('')
  
  const updateEmailAddress = async() => {
    setEmailError('')
    try {
      await updateUserEmail(newEmail);
      alert('email updated')
      console.log('Email updated')
    } catch (err) {
      console.log('Error in Email update: ', err.message)
      setEmailError(err.message)
    }
  }

  const resetPassword = async() => {
    setPasswordError('')
    try {
      await updateUserPassword(newPassword);
      alert('email updated')
      console.log('Email updated')
    } catch (err) {
      console.log('Error in Email update: ', err.message)
      setPasswordError(err.message)
    }
  }
  
  const deleteAcc = async() => {
    setDeleteAccountError('')
    try {
      const deleteEmail = prompt("To delete your Account, Please enter your email address. Please remember once deleted it cann't be recovered.")
      if (deleteEmail.toLowerCase() === user.email.toLowerCase()){
        await deleteAccount();
        console.log("account deleted")
        alert('account deleted')
      }
      else {
        console.log("your email address does not match")
        alert('your email address does not match')
      }
    } catch (err) {
      console.log('error in deleting the account from deleteAccount function (Navigation.js): ', err.message)
      setDeleteAccountError(err.message)
    }
  }

  const authenticateUser = async(newPassword) => {
    try {
      await userAuthentication(newPassword);
      console.log('user authenticated')
    } catch (err) {
      console.log('error in authenticate user function (Account.js): ', err.message)
    }
  }
  
  
  return (
    <div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Account Info</legend>
              
              <div className="mt3">
                {/* <label className="db fw6 lh-copy f6" htmlFor="name">Name</label> */}
                {/* <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="name"  id="name" value={name} onChange={(e) => setName(e.target.value)}/> */}
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="ma3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
                <input onClick={updateEmailAddress} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Reset Email"/>
                <h5 className='red'>{emailError}</h5>
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b ma3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                <input onClick={resetPassword} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Reset Password"/>
                <input onClick={authenticateUser} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Authenticate User"/>
                <h5 className='red'>{passwordError}</h5>
              </div>

            </fieldset>
            <div className="">
              <input onClick={deleteAcc} className="b ma3 ph3 pv2 input-reset ba b--black bg-light-red br2 grow pointer f6 dib" type="submit" value="Delete Account"/>
              <h5 className='red'>{deleteAccountError}</h5>
            </div>
            <div className="lh-copy mt3">
              {/* <a href="#0" className="f6 link dim black db">Register</a> */}
            </div>
          </div>
        </main>
      </article>
    </div>
  )
}

export default Account