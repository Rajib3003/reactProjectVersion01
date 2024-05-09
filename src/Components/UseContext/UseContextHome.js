import React from 'react'
import UseContextUser from './UseContextUser'
import UseContextNewUserReg from './UseContextNewUserReg'
import UsersProvider from './UserContext'




const UseContextHome = () => {

 
  return (
   <UsersProvider >
    <div>
      <div class="card">
        <div class="card-body">
        <img src="/images/darazbanner.jpg" alt="Banner" style={{ height: '200px', width: '100%'}} />
        </div>
      </div>

      <UseContextNewUserReg />
      
      <div class="card-container">  
        <div class="card">
          <div class="card-body">
          <UseContextUser  />
          </div>
        </div>
      </div>

    </div>
  </UsersProvider>
  )
}

export default UseContextHome
