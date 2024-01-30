import React from 'react'
import Home from './components/Homepage/Home'
import MainPage from './components/MainPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import PageView from './components/PageView'
import Nav from './components/Nav'
import './App.css'
import SignUp from './components/Authentication/SignUp'

function App() {
  return (
    <div>
    <BrowserRouter>
    {/* <SignUp/> */}
    <Nav/>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/jobview/:id' element={<PageView/>}/>
        <Route path='/apply/:id' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
