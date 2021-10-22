import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, database } from '../misc/firebase';

const PorfileContext = createContext();     //CREATING A CONTEXT FOR PROFILE 
export const ProfileProvider = ({ children }) => {   //EXPORTING A FUNTION FOR CONTEXT AND IT HAS A CHILDREN PROPS THAR WILL TAKE ALL CHILDREN FROM THE APP.JS {/*IT ACTS JUST WRAPPER FOR COMPONENT */}
    const [profiles, setProfile] = useState(null);   //SETTING THE profile by default false
    const [isloading, setisloading] = useState(true)
    useEffect(() => {
        let userRef;
        //subsciption to database
        const onUnsub =auth.onAuthStateChanged(authObj => {    //Here we are subscribing with the database to render the account data after component mounts
            console.log(authObj)
            if (authObj) {
                userRef=database.ref(`/profiles/${authObj.uid}`);
                userRef.on(`value`, (snap) => {   //path for the database for realtime subscription if the data changes in database then the arrow function will invoked every time after changing the data
                    const { name, created } = snap.val()         //here we can see the data which we are retreiving from database and destructuring the data
                    console.log(name,created)
                    const data = {      //data from database
                        name,        //database
                        created,     //database
                        uid: authObj.uid,    //from object
                        email: authObj.email //from object
                    }
                    setProfile(data)
                    setisloading(false)
                })
            }
            else {
                if(userRef){
                    userRef.off()    //unsubcribing the data from database as we have use useRef.on so we can off for unsubscribing the data
                }
                setProfile(null)
                setisloading(false)
            }
        })
        return () => {
            if(userRef){
                userRef.off()
            }
            onUnsub()
        }
    }, [])


    return (
        <PorfileContext.Provider value={{profiles,isloading}}>
            {children}
        </PorfileContext.Provider>
    )

}


export const useProfile = () => useContext(PorfileContext);