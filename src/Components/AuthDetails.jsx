import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });
        return () => {
            listen();
        }
    }, [])
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign Out Successful");
        }).catch(error => console.log(error))
    }
    return (
        <>{authUser ? <div><h5>{`Signed In as ${authUser.email}`}</h5> <button onClick={userSignOut}>Sign Out</button></div> : <h5>Signed Out</h5>}</>
    )
}

export default AuthDetails;