import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import GetUsers from './Components/UsersContainer/GetUsers'
import UserCard from './Components/UserCards/UserCard'
import UserProfile from './Components/UserProfile/UserProfile'
import PageNotFound from './Components/ErrorHandling/PageNotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<GetUsers/>}/>
        <Route path='/userProfile/:id' element={<UserProfile/>}/>
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
    {/* </BrowserRouter> */}
    </>
  )
}

export default App
