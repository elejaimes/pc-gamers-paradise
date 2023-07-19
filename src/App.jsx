import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  return (
    <>
     <NavBar/>
     <ItemListContainer 
     greeting="Bienvenidos a PC Gamers Paradise"
     />
    </>
  )
}

export default App