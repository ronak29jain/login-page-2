import React from 'react'
import './Navigation.css'
import { UserAuth } from '../../context/Authcontext';

function Navigation({ route, setRoute }) {
  
  const { user, googleSignOut } = UserAuth();

  const signOut = async() => {
    try {
      await googleSignOut();
    } catch (err) {
      console.log('Error During Log Out (Navigation.js)', err)
    }
  }

  // const deleteAcc = async() => {
  //   try {
  //     const deleteEmail = prompt("To delete your Account, Please enter your email address. Please remember once deleted it cann't be recovered.")
  //     if (deleteEmail.toLowerCase() === user.email.toLowerCase()){
  //       await deleteAccount();
  //       console.log("account deleted")
  //       alert('account deleted')
  //     }
  //     else {
  //       console.log("your email address does not match")
  //       alert('your email address does not match')
  //     }
  //   } catch (err) {
  //     console.log('error in deleting the account from deleteAccount function (Navigation.js): ', err)
  //   }
  // }

  return (
    <nav className='navigation'>
      {/* { 
        user
          // <p onClick={() => changeroute('signin')} className='f3 pa3 link dim black underline pointer'>Sign Out</p> :
          ? <div className='flex justify-end'>
              <p onClick={signOut} className='nav f3 pa3 link dim black underline pointer'>Sign Out</p>
              <p onClick={() => setRoute('account')} className='nav f3 pa3 link dim black underline pointer'>Account</p>
            </div>
          : <div className="nav">
              <p onClick={() => setRoute('signin')} className='f3 pa3 link dim black underline pointer'>Sign In</p>
              <p onClick={() => setRoute('register')} className='f3 pa3 link dim black underline pointer'>Register</p>
            </div>
      } */}

      <div className="nav">
        
        {
          ((user) && !(route === 'home')) 
            ? <p onClick={() => setRoute('home')} className='nav f3 pa3 link dim black underline pointer'>Home</p>
            : null
        }
        
        {
          (user && !(route === 'account')) 
            ? <p onClick={() => setRoute('account')} className='nav f3 pa3 link dim black underline pointer'>Account</p>
            : null
        } 
        {
          (user)
            ? <p onClick={signOut} className='nav f3 pa3 link dim black underline pointer'>Sign Out</p>
            : null
        }

        {
          (!user && !(route === 'signin')) 
            ? <p onClick={() => setRoute('signin')} className='nav f3 pa3 link dim black underline pointer'>Sign in</p>
            : null
        }

        {
          (!user && !(route === 'register')) 
            ? <p onClick={() => setRoute('register')} className='nav f3 pa3 link dim black underline pointer'>Regiester</p>
            : null
        }

        {/* {
          (!user && !(route === 'signin')) 
            ? <p onClick={() => setRoute('signin')} className='nav f3 pa3 link dim black underline pointer'>Sign in</p>
            : null
        } */}
      </div>
    </nav>
  )
}

export default Navigation