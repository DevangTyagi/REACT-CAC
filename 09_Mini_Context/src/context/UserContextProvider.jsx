import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [ user , setUser] = useState(null)
     return(
             <UserContext.Provider value={{user,setUser}}>    
            {children}
            </UserContext.Provider>   //We have to provide data to the provider
    )
}

export  default UserContextProvider