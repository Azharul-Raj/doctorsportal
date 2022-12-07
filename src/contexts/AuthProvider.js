import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'


const auth = getAuth(app);
export const authContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    // email signIn
    const emailSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // emailLogin
    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // google signUp
    const googleProvider = new GoogleAuthProvider();
    const googleSignUp = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // update user name function
    const update = (name) => {
        updateProfile(auth.currentUser, {
            displayName:name
        })
    }
    // monitor or observer function
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    // password reset function
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    // logOut
    const logOut = () => {
        signOut(auth)
            .then(() => { })
        .catch(()=>{})
    }
    const info = { user,loading,emailSignUp,update, emailLogin, googleSignUp, resetPassword, logOut };
    return (
        <authContext.Provider value={info}>
            {
                children
            }
        </authContext.Provider>
    );
};

export default AuthProvider;