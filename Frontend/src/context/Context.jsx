import React, { createContext } from 'react'
import { useState } from 'react';
export const logincontext = createContext()
const Context = (props) => {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [islogin,setIslogin] = useState(false);
  return (
    <div>
      <logincontext.Provider value={[email, setEmail,password, setPassword,islogin,setIslogin]}>
        {props.children}
      </logincontext.Provider>
    </div>
  )
}

export default Context
