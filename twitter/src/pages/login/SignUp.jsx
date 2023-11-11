import React, { useState } from 'react'
import twitterImage from "../../images/twitter.jpeg"
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from '../../firebase.init';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import GoogleButton from 'react-google-button'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'

const SignUp = () => {
    const [userVal,setUser]=useState({username:'',name:'',email:'',password:''})
  const [errorMsg,setError]=useState('');
  const navigate=useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  if(user || googleUser){
    console.log(user || googleUser)
    navigate('/login')
  }
  if(error || googleError){
    console.log(error || googleError)
  }
  if(loading || googleLoading){
    console.log(loading || googleLoading)
  }

  const handleSubmit=(e)=>{
   e.preventDefault();
  //  console.log(error)
  console.log(user)
   createUserWithEmailAndPassword(userVal.email, userVal.password)
  }

  const handleGoogle=()=>{
    signInWithGoogle()
  }

  return (
    <div className='login-container'>
    <div className="image-container">
      <img className='image' src={twitterImage}  />
    </div>
    <div className="form-container">
      <div className='form-box'>
      <TwitterIcon className='Twittericon' style={{color:'skyblue'}}/>
      <h2 className='heading'>Happining Now</h2>
      <h3 className='heading1'>Join twitter today</h3>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder='@username'
        className='display-name'
        onChange={(e)=>setUser({...userVal,username:e.target.value})}
        />
        <input type="text" 
        className='display-name'
        placeholder='Enter Full Name'
        onChange={(e)=>setUser({...userVal,name:e.target.value})}
        />

        <input type="email" 
        className='email'
        placeholder='Email Address'
        onChange={(e)=>setUser({...userVal,email:e.target.value})}
        />
        <input type="password" 
        className='password'
        placeholder='Password'
        onChange={(e)=>setUser({...userVal,password:e.target.value})}
        />
        <div className='btn-submit'>
          <button type='submit' className='btn'>Signup</button>
        </div>
      </form>
      <hr />
      <div className='google-button'>
        <GoogleButton
        className='g-btn'
        type='light'
        onClick={handleGoogle}
        />
      </div>
      <div>
        Already have a Account?
          <Link
          to={'/login'}
          style={{textDecoration:'none',color:'skyblue',fontWeight:'600',marginLeft:'5px'}}
          >
          Login</Link>
        `
      </div>
    </div>
    </div>
    </div>
  )
}

export default SignUp
