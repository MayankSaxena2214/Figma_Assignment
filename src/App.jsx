import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './components/Layout/Layout'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Layout/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App