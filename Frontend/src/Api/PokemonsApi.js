const url = "http://Localhost:4000/Pokemons/";
//const url = "API PARA TRAER PokemonS"
//estas son todas las funciones que traen los datos del bakend

export async function getListaPokemons(){
    const res = await fetch(url);
    const data = await res.json();
    return data.Pokemons;
}// con este realizado el listado de todos los pokemons disponibles 

export async function getListaPokemonId(id){
    const res = await fetch(url +`${id}`);
    const data = await res.json();
    return data;
}// con este obtiene el pokemon seleccionado 

export async function editarPokemon(Pokemon){
    const res = await fetch(url,{
        method: 'PATCH',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(Pokemon)
    });
    const data = await res.json();
    return data;
}

export async function eliminarPokemon(id){
    const res = await fetch(url+`${id}`,{
        method: 'DELETE',
        headers:{'content-type': 'application/json'},
    });
    const data = await res.json();
    return data;
}

export async function login(Pokemon){
    const res = await fetch(url + 'login',{
        method:'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(Pokemon)
    });
    const data = await res.json();
    return data;
}

export async function agregarPokemon(Pokemons){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(Pokemons)
    });

    const data = await res.json();
    console.log(Pokemons)
    console.log(data)

    return data.Pokemons
}