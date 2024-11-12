
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";
import {createContext, useEffect, useState} from "react";
import {auth} from '../firebase/firebase.init'
export const AuthContext = createContext(null)
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =  useState(true)
    const googleProvider = new GoogleAuthProvider
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unSubscribe;
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create provider 
 * 3. set a value with something (authInfo)
 * 4. [attention please !!!]
 * 5. use the auth provider in the main.jsx
 * 6.access the children inside the authProvider in the main.jsx
 * 7. export AuthContext
 */