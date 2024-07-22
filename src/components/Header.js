import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userslice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch=useDispatch();

  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(
            addUser({
                uid:uid,
                email:email,
                displayName:displayName
                ,photoURL:photoURL
            })
        );
        navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
          
        }
      });

      //unsubscribe when component unmounts
      return()=> unsubscribe();
},[]);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black-500 z-20 flex justify-between'>
        <img 
            className='w-40 animate-pulse'
            src={LOGO}
            alt="Logo"
        />
        {user && (<div className="flex p-2">
          <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">GPT Search</button>
          <img 
          className='w-12 h-12 mt-1 rounded-xl'
          alt="usericon" 
          src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 ml-3">Sign Out</button>
          </div>
      ) }
    </div>
  );
};

export default Header