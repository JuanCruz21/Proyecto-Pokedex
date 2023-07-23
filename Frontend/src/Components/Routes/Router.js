import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Usuario from '../Usuario/Usuario'
import FormUsuarios from '../Usuario/FormUsuarios'
import Pokemons from '../Pokemon/Pokemons'
import ListPokemons from '../Pokemon/ListPokemons'
import FormPokemons from '../Pokemon/FormPokemons'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Usuario' element={<Usuario/>}></Route>
            <Route path='/FormUsuario' element={<FormUsuarios/>}></Route>
            <Route path='/Pokemons' element={<Pokemons/>}></Route>       
            <Route path='/FormPokemons' element={<FormPokemons/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
