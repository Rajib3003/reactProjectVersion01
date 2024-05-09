import React, { useState } from 'react'
import ComponentTwo from './ComponentTwo'
import { UserContext } from './UserContext'
const ComponentOne = () => {
    const [user] = useState({id:101, name:"Rajib"})
    const [text] = useState("i am user Contxt");
  return (
    <UserContext.Provider value={{user,text}}>
      <ComponentTwo  />
    </UserContext.Provider>
  )
}

export default ComponentOne
