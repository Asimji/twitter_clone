import React, { useState } from 'react'
import twitterImage from "../../images/twitter.jpeg"
import TwitterIcon from '@mui/icons-material/Twitter';
import auth from '../../firebase.init';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import "./Login.css"
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userVal,setUser]=useState({email:'',password:''})
  const [errorMsg,setError]=useState('')
  const navigate=useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

  if(user || googleUser){
    console.log(user || googleUser)
    navigate('/')
  }
  if(error || googleError){
    console.log(error || googleError)
  }
  if(loading || googleLoading){
    console.log(loading || googleLoading)
  }

  const handleSubmit=(e)=>{
   e.preventDefault();
   signInWithEmailAndPassword(userVal.email, userVal.password)
   console.log(user)
  }
  const handleGoogle=()=>{
    signInWithGoogle()
  }
  return (
    <div className='login-container'>
    <div className="image-container">
      <img className='image' src={twitterImage} alt="" />
    </div>
    <div className="form-container">
    <div className='form-box'>
      <TwitterIcon className='Twittericon' style={{color:'skyblue'}} />
      <h2 className='heading'>Happining Now</h2>
      <h3 className='heading1'>What happening today</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" name="" id=""
        className='email'
        placeholder='Email Address'
        onChange={(e)=>setUser({...userVal,email:e.target.value})}
        />
        <input type="password" name="" id=""
        className='password'
        placeholder='Password'
        onChange={(e)=>setUser({...userVal,password:e.target.value})}
        />
        <div className='btn-submit'>
          <button type='submit' className='btn'>Login</button>
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
        Don't have a account?
          <Link
          to={'/signup'}
          style={{textDecoration:'none',color:'skyblue',fontWeight:'600',marginLeft:'5px'}}
          >
          Sign up</Link>
        `
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login
