import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return (
        <>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        </>
    )
}

export default UserContextProvider

// You created UserContext to allow sharing data between components.

// Then, in UserContextProvider, you used useState to store the data (user, setUser) and made it available to other components using UserContext.Provider.

// Now, any component that is inside UserContextProvider can access or change that shared data using the useContext(UserContext) hook.