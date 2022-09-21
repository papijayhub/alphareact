// import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Form from './Form'
import Home from './components/Home'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Form />} />
    </Routes>
  </>
  )
}

export default App
