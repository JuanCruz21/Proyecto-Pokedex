import React from 'react'

function Navegador() {
  return (
    <div>
      <header className='container'>
          <nav>
              <ul className='nav nav-tabs'>
              <li className='nav-item'><a className='nav-link' href='/'>Home</a></li>
              <li className='nav-item'><a className='nav-link' href='/Usuario'>Usuarios</a></li>
              <li className='nav-item'><a className='nav-link' href='/Pokemons'>Lista de Pokemons</a></li>
              <li className='nav-item'><a className='nav-link' href='/FormPokemons'>Agregar Pokemons</a></li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Navegador
