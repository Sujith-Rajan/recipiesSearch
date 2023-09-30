import React from 'react'
import Home from './Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipies from './Recipies'
import { AnimatePresence } from 'framer-motion'
function Pages() {
  const location = useLocation()
 
  return (
    <div>
     
    <AnimatePresence>
      
        <Routes Location={location} key={location.pathname}>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/cuisine/:type' element={<Cuisine/>}/>
          <Route path='/search/:search' element={<Searched/>}/>
          <Route path='/recipie/:name' element={<Recipies/>} />
        
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default Pages