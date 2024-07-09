import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,seterrorMessage]=useState(null);
    const Navigate=useNavigate();

    const email=useRef(null);
    const password=useRef(null);

    const HandleButtonClick = ()=>{
        // Validate the form data
        const message = checkValidData(email.current.value,password.current.value);
        seterrorMessage(message);

        if(message)return;

        // Sign in / Sign up
        if(!isSignInForm){
            //SignUpLogic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                Navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrorMessage(errorCode + "-" + errorMessage);
                
            });

        }
        else{
            //SignInLogic
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            Navigate("/browse")
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode+"-"+errorMessage)
            });

        }

    };

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg' 
                alt='Body'
            />
        </div>
        <form
        onSubmit={(e)=>e.preventDefault()} 
        className='w-3/12 absolute p-12
                 bg-black my-40 mx-auto right-0 left-0
                  text-white bg-opacity-80 rounded-lg'>

        <h1 className=' font-bold text-3xl p-4'>{isSignInForm ? "Sign In" :"Sign Up"}</h1>
            
            {!isSignInForm &&( 
            <input
                type="text" 
                placeholder='Full Name' 
                className='p-4 my-2 w-full
                 bg-slate-300 bg-opacity-10  rounded-lg border-2
                 border-neutral-50 border-opacity-25 '
            />)}
    
            <input
                ref={email}
                type="text" 
                placeholder='Email Address' 
                className='p-4 my-2 w-full
                     bg-slate-300 bg-opacity-10  
                    rounded-lg border-2 
                     border-neutral-50
                    border-opacity-25 '
            />
            <input 
                ref={password}
                type="password" 
                placeholder='Password' 
                className='p-4 my-2 w-full
                 bg-slate-300
                  bg-opacity-10 rounded-lg 
                  border-2 
                 border-neutral-50 
                  border-opacity-25'
            />
            <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
            <button 
                className='p-4 my-2
                 bg-red-700 
                 w-full rounded-lg border-2 
                  border-neutral-50 border-opacity-25 'onClick={HandleButtonClick}>{isSignInForm ? "Sign In" :"Sign Up"}
            </button>
            <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" :"Already Registered Sign In Now"}</p>
            
        </form>
    </div>
  )
}

export default Login