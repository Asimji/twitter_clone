import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Widget from '../widget/Widget'
import Feed from '../feed/Feed'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth'
import { Outlet } from 'react-router-dom'

const Home = () => {

  const user=useAuthState(auth)

  const handleLogout=()=>{
 signOut(auth)
  }
  return (
    <div className='app'>
      <Sidebar handleLogout={handleLogout} user={user}/>
      <Outlet/>
      <Widget/>
    </div>
  )
}

export default Home
