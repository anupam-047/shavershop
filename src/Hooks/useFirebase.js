import { useState, useEffect } from "react";
import firebaseInitialize from '../Firebase/firebase.init';
import {
    GoogleAuthProvider,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    getIdToken,
    signInWithPopup,
    onAuthStateChanged,
    signOut,
    TwitterAuthProvider,
} from "firebase/auth";

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();



    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                //Save user to the database
                // saveUser(email, name, 'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    console.log(error);
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        console.log(idToken);
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);


    // google login
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    //twitter login
    const twitterLogin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, twitterProvider);
    }
    // //state change
    // useEffect(() => {
    //   const unsubscribe = onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       setUser(user)
    //     } else {
    //       setUser({})
    //     }
    //     setIsLoading(false);
    //   });
    //   return unsubscribe;
    // }, [])




    // //logout
    // const logOut = () => {
    //   console.log('click');
    //   setIsLoading(true)
    //   signOut(auth)
    //     .then(() => {
    //       setUser({})
    //     }).finally(() => {
    //       setIsLoading(false);
    //     })
    // }


    // useEffect(() => {
    //     fetch(`https://protected-retreat-82720.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin))
    // }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };

    //     fetch('https://protected-retreat-82720.herokuapp.com/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }


    return {
        googleLogin,
        logOut,
        user,
        authError,
        admin,
        registerUser,
        loginUser,
        setUser,
        setIsLoading,
        isLoading,
        signInWithGoogle,
        twitterLogin,
    };
};

export default useFirebase;