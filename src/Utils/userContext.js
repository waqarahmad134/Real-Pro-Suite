// import { createContext, useContext, useState } from "react";

// export const userContext = createContext({
//   user:false,
//   LoginStatus:()=>{},

// })



// export function UserContextProvider ({children})
// {
//   const [user,setUser]=useState(false);
//   function LoginStatus(){
//     setUser(true);
//   }
//   return <userContext.Provider value={{user,LoginStatus}}>{children}</userContext.Provider>
// }

// export function useUserContext (){
//   const {user,LoginStatus} = useContext(userContext);
//   return {user,LoginStatus};
// }