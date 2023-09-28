import React from 'react'
import Home from './Home'
import { Routes,BrowserRouter, Route } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'

function Pages() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/cuisine/:type' element={<Cuisine/>}/>
          <Route path='/search/:search' element={<Searched/>}/>
        
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Pages