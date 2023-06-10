import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
//
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    //
    const [user, setUser]= useState(null);
    const [loadign, setLoading] = useState(true);
     //created user
     const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
        setLoading(true)
     }
     //signIn
     const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
        setLoading(true)
     }
     //logOut
     const logOut =()=>{
        return signOut(auth)
        setLoading(true)
     }
     ///update Profile photo and name
     const updateProfiles = (name, photo) =>{
          return updateProfile(auth.currentUser, {
            displayName: name,
            photoUrl: photo
          })
          setLoading(true);
     }
     //currentUser
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser);
             console.log('current user', currentUser);
             setLoading(false);
        })
        return()=>{
             return unsubscribe();
        };
     },[])

    const authInfo={
        user,
        loadign,
        createUser,
        signIn,
        logOut,
        updateProfiles,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;