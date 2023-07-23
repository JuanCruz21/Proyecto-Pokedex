import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';

function ListPokemons(props) {
  const { Pokemons, onDelete, onView } = props;
  const [filterParam] = useState(["All"]);
  const [searchParam] = useState(["nombre","tipo"]);
  const [q, setQ] = useState("");

  if (!Pokemons) {
    return <p>Loading...</p>; // Mostrar un mensaje de carga mientras se obtienen los datos
  }
    function search(Pokemons) {
      // eslint-disable-next-line array-callback-return
      return Pokemons.filter((pokemon) => {
          // eslint-disable-next-line eqeqeq
          if (pokemon.nombre == filterParam) {
              return searchParam.some((newpokemon) => {
                  console.log("pokemon ----------->",pokemon);
                  return (
                      pokemon[newpokemon]
                          .toString()
                          .toLowerCase()
                          .indexOf(q.toLowerCase()) > -1
                  );
              });
          // eslint-disable-next-line eqeqeq
          } else if (filterParam == "All") {
              return searchParam.some((newpokemon) => {
                  console.log("pokemon ----------->",newpokemon);
                  return (
                      pokemon[newpokemon]
                          .toString()
                          .toLowerCase()
                          .indexOf(q.toLowerCase()) > -1
                  );
              });
          }
      });
  }
  return (
    <div className="row">
              <div className="search-wrapper" >
                <label htmlFor="search-form">
                <input type="search" value={q} name="search-form" id="search-form" className="search-input" placeholder="Buscar..." 
                onChange={(e) => setQ(e.target.value)} />
                </label>
            </div>
      {search(Pokemons).map((pokemon) => (
        <div key={pokemon._id} className="col-md-4 mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{pokemon.nombre}</Card.Title>
              <Card.Text>{pokemon.descripcion}</Card.Text>
              <Card.Text>Altura: {pokemon.altura}</Card.Text>
              <Card.Text>Peso: {pokemon.peso}</Card.Text>
              <Card.Text>Especie: {pokemon.especie}</Card.Text>
              <Card.Text>Habilidades especiales: {pokemon.habilidades_especiales}</Card.Text>
              <Card.Text>Sexo: {pokemon.sexo}</Card.Text>
              <Card.Text>Tipo: {pokemon.tipo}</Card.Text>
              <Card.Text>Debilidad: {pokemon.debilidad}</Card.Text>
              <div className="d-grid gap-2">
                <button className="btn btn-warning" onClick={() => onView(pokemon)}>
                  Ver
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(pokemon._id)}>
                  Eliminar
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ListPokemons;