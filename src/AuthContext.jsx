import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(true)
    function login(){
        setIsLoggedIn(true)
    }
    function logout(){
        setIsLoggedIn(false)
    }

   return (<>
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
            {children}
        </AuthContext.Provider>
   </>)
}

