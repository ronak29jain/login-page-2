import React, { useState } from 'react'
import { UserAuth } from '../context/Authcontext'
import { Navigate } from 'react-router-dom'

function UserProfile() {
  
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

  if (!(user?.displayName)) {
    // alert('Please Enter the User Details')
    return <Navigate to='/adding-profile' />
  }

  return (
    <div className='user-profile center'>
      <article className="signin-form center">
          <div>
            <fieldset className="fieldset">
              <legend className="legend">Account Info</legend>
              
              <div className="input-section">
                <label className="label" htmlFor="email-address">Email</label>
                <input className="input" type="email" name="email-address"  value={newEmail} onChange={(e) => setNewEmail(e.target.value)}/>
                <input onClick={updateEmailAddress} className="submit" type="submit" value="Reset Email"/>
                <h5 className='red'>{emailError}</h5>
              </div>

              <div className="input-section">
                <label className="label" htmlFor="password">Password</label>
                <input className="input" type="password" name="password"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                <input onClick={resetPassword} className="submit" type="submit" value="Reset Password"/>
                <input onClick={authenticateUser} className="submit" type="submit" value="Authenticate User"/>
                <h5 className='red'>{passwordError}</h5>
              </div>
            </fieldset>
            
            <div className="">
              <input onClick={deleteAcc} className="submit" type="submit" value="Delete Account"/>
              <h5 className='red'>{deleteAccountError}</h5>
            </div>
          </div>
      </article>
    </div>
  )
}

export default UserProfile