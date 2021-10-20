import React,{createContext, useContext, useState} from 'react'

export const PorfileContext = createContext();     //CREATING A CONTEXT FOR PROFILE 
export const ProfileProvider = ({children}) =>{   //EXPORTING A FUNTION FOR CONTEXT AND IT HAS A CHILDREN PROPS THAR WILL TAKE ALL CHILDREN FROM THE APP.JS {/*IT ACTS JUST WRAPPER FOR COMPONENT */}
    const [profiles] = useState(false);   //SETTING THE profile by default false
    return (
    <PorfileContext.Provider value={profiles}>   
        {children}
        </PorfileContext.Provider>
    )
    
}


export const useProfile = ()=> useContext(PorfileContext);