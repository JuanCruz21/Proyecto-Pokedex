/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Navegador from '../Routes/Navegador'
import './Home.css'
import Header from '../Routes/Header/Header'

function Home() {

  return (
    <div>
      <h1>Bienvenidos a Pokedex</h1>
      <Header/>
      <Navegador/>
      
      <img src='Img/International_Pokémon_logo.svg.webp'/>
    </div>
  )
}

export default Home
