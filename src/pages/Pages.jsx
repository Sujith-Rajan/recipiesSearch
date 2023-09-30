import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipies from './Recipies'

function Pages() {
  return (
    <div>
     
    
      
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/cuisine/:type' element={<Cuisine/>}/>
          <Route path='/search/:search' element={<Searched/>}/>
          <Route path='/recipie/:name' element={<Recipies/>} />
        
        </Routes>
       
    </div>
  )
}

export default Pages