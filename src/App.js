import React from 'react'
import Home from './components/Homepage/Home'
import MainPage from './components/MainPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import PageView from './components/PageView'
import Nav from './components/Nav'
import './App.css'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/jobview/:id' element={<PageView/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
