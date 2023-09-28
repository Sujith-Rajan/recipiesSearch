import React from 'react'
import Veggie from '../components/Veggie'
import Popular from '../components/Popular'
import Catogories from '../components/Catogories'
import Search from '../components/Search'


function Home() {
  return (
    <div >
      <Search/>
      <Catogories/>
        <Veggie />
        <Popular />
    </div>
  )
}

export default Home