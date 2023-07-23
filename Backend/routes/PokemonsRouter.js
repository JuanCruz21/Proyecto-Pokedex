const express = require('express');
const Pokemons = require('../Models/Pokemons');
const PokemonsRouter = express.Router();

//Listar Pokemons
PokemonsRouter.get("/", (req,res)=>{
    Pokemons.find()
        .then(datos => res.json({Pokemons:datos}))
        .catch(error=>res.json({mensaje:error}))
});

//Obtener Pokemon por id
PokemonsRouter.get("/:id", (req,res)=>{
    Pokemons.findById({_id: req.params.id})
        .then(datos=>res.json(datos))
        .catch(error=>res.json({mensaje:error}))
});

//Guardar Pokemon
PokemonsRouter.post("/", (req,res)=>{
    console.log(req.body);
    const pokemon = new Pokemons(req.body);
    pokemon.save()
    .then(data=> {
        console.log(data)
        res.json(data)})
    .catch(error=>res.json({mensaje:error}))
})

//Modificar Pokemon
PokemonsRouter.patch("/:id", (req,res)=>{
    const pokemon = new PokemonsRouter(req.body);
    Pokemons.updateOne({_id: pokemon._id}, pokemon)
    .then(datos=>res.json(datos))
    .catch(error=>res.json({mensaje:error}))

})

//Eliminar Pokemon
PokemonsRouter.delete("/:id", (req,res)=>{
    Pokemons.deleteOne({_id: req.params.id})
        .then(datos=> res.json(datos))
        .catch(error=> res.json({mensaje:error}))
});


module.exports = PokemonsRouter;