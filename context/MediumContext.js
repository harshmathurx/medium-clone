import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { auth, db, provider } from "../firebase"
import { createContext, useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleUserAuth = async () => {
        const userData = await signInWithPopup(auth, provider)
        setCurrentUser(userData.user);
        addToFirebase(userData.user);
    }

    const addToFirebase = async (user) => {
        await setDoc(doc(db, 'users', user.email),{
            name: user.displayName,
            email: user.email,
            imageUrl: user.photoURL,
            followerCount: 0,
        })
    }

    return (
        <MediumContext.Provider value={{handleUserAuth,currentUser }}>{children}</MediumContext.Provider>
    );
}


export { MediumContext, MediumProvider};