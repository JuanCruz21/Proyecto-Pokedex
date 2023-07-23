import React, { useEffect, useState } from 'react'
import { getListaPokemons, eliminarPokemon } from '../../Api/PokemonsApi';
import ListPokemons from './ListPokemons';
import Navegador from '../Routes/Navegador'

function Pokemon() {
  const [Pokemons, SetPokemons] = useState([])

  const Listar = () => {
    getListaPokemons().then((data) => { SetPokemons(data) }).catch((err) => { console.log(err) })
  }

  useEffect(() => {
    Listar()
  }, [])

  const eliminar = (id) => {
    console.log("Id:" + id)
    eliminarPokemon(id).then((data) => {
      console.log(data)
      if (data.deletedCount === 1)
        Listar();
    }).catch((err) => { console.log(err) })
  }

  const [mostrarLista, setMostrarLista] = useState(true)

  const verLista = (e) => {
    if (mostrarLista) {
      setMostrarLista(false);
    } else {
      setMostrarLista(true);
      SetPokemons({
        id_: null,
        nombre: '',
        descripcion: '',
        altura: '',
        peso: '',
        especie: '',
        habilidades_especiales: '',
        sexo: '',
        tipo: '',
        debelidad: '',
      });
    }
  };

  return (
    <div>
      <Navegador />
      <ListPokemons Pokemons={Pokemons} onDelete={eliminar} onView={verLista} />
    </div>
  );
}

export default Pokemon;
