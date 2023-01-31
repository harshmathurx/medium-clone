import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { auth, db, provider } from "../firebase"
import { createContext, useEffect, useState } from "react";
import { signInWithPopup } from "firebase/auth";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const users = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: { ...doc.data() }
                }
            })
            setUsers(users);
        }

        getUsers();
    }, []);

    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'articles'));
            const posts = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        body: doc.data().body,
                        brief: doc.data().brief,
                        category: doc.data().category,
                        postLength: doc.data().postLength,
                        bannerImage: doc.data().bannerImage,
                        title: doc.data().title,
                        postedOn: doc.data().postedOn,
                        author: doc.data().author,
                    }
                }
            })
            setPosts(posts);
        }

        getPosts();
    }, [])

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
        <MediumContext.Provider value={{ posts, users, handleUserAuth,currentUser }}>{children}</MediumContext.Provider>
    );
}


export { MediumContext, MediumProvider};