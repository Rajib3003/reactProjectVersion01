import React, { useState } from 'react'

import CountriesHome from './Components/Countries/CountriesHome'
import UseReducerState from './Components/Reducers/UseReducerState'
import ComponentOne from './Components/DrillingProp/ComponentOne'
import UseContextHome from './Components/UseContext/UseContextHome'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigate from './Navigate/Navigate'
import BlogsContent from './Components/Blogs/BlogsContent'
import BlogContent from './Components/Blogs/BlogContent'
import Users from './Components/Users/Users'
import Protected from './Components/Protected/Protected'
import JsonDataShow from './Components/JsonDataShow/JsonDataShow'
import ReduxAPIFetch from './Components/ReduxAPIFetch/ReduxAPIFetch'


import RootRedux from './Components/RootReduxServices/ReduxServices/RootRedux'
import Counts from './Components/ReduxIncrement/ReduxComponents/Counts'
import Todos from './Components/ReduxIncrement/ReduxComponents/Todos'
import ViewCounter from './features/counter/ViewCounter'
import ViewPost from './features/post/ViewPost'
import Home from './Components/CurdComponents/Pages/Home'
import AddBooks from './Components/CurdComponents/Pages/AddBooks'
import BooksView from './Components/CurdComponents/Pages/BooksView'
import EditBook from './Components/CurdComponents/Pages/EditBook'
import Country from './Components/Countries/Country'
import ApiCall from './Components/apiCall/ApiCall'



const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
    <div>
            {/* <header>
                <h1>A template for React Project</h1>
            </header> */}
           
            <main>                
                <Navigate isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <div className='container'>
                    <div className='row'>
                   
                   
                <Routes>
                    <Route path="/" element={<UseContextHome />} />
                    <Route path="/reducer" element={<UseReducerState />} />
                    <Route path="/component" element={<ComponentOne />} />
                    <Route path="/blogs" element={<BlogsContent />} />
                    <Route path="/blogs/:title" element={<BlogContent />} />
                    <Route path="/users" element={
                       <Protected isLoggedIn={isLoggedIn}>
                            <Users title="Users page"/>
                       </Protected>                     
                    } />
                    <Route path="/jsonData" element={<JsonDataShow />} />
                    <Route path="/redux" element={<ReduxAPIFetch />} />
                    
                    {/* <Route path="/countReducer" element={ <RootRedux /> } /> */}
                    <Route path="/count" element={ <Counts /> } />
                    <Route path="/counter" element={ <ViewCounter />} />
                    <Route path="/post" element={ <ViewPost />} />
                    <Route path="/country" element={ <CountriesHome/>} />
                    <Route path="/apiCall" element={ <ApiCall />} />

                    
                    <Route path="/addBooks" element={ <AddBooks />} />
                    <Route path="/bookView" element={ <BooksView />} />
                    <Route path="/editBook" element={ <EditBook />} />
                    
                   
                    
                </Routes>
                </div>
                </div>
            
            </main>
            <footer>
                <p className="left">
                    Subscribe to my{' '}
                   {' '}
                    channel
                </p>
                <p className="right">Developed with &hearts; by Mohammad Rajib</p>
            </footer>
        </div>
        </Router>
  )
}

export default App
