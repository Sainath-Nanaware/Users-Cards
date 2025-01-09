import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import GetUsers from './Components/UsersContainer/GetUsers'
import UserCard from './Components/UserCards/UserCard'
import UserProfile from './Components/UserProfile/UserProfile'

function App() {

  return (
    <>
    {/* <GetUsers/> */}
    {/* <UserCard/> */}
    {/* <UserProfile/> */}
    {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<GetUsers/>}/>
        <Route path='/userProfile/:id' element={<UserProfile/>}/>
      </Routes>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App
