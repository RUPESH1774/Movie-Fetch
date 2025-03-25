import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Fotter from './Fotter'
import Contact from './Contact'
import Rmovie from './Rmovie'
import Latest from './Latest'
import Amovie from './Amovie'
import Page2 from './Page2'
import Page3 from './Page3'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/rmovie' element={<Rmovie/>}></Route>
        <Route path ='/latest' element={<Latest/>}></Route>
        <Route path='/amovie' element={<Amovie/>}></Route>
        <Route path='/fotter' element={<Fotter/>}></Route>
        <Route path='/page2' element={<Page2/>}></Route>
      <Route path='/page3' element={<Page3/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
