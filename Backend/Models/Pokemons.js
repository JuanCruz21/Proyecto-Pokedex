const mongoose = require("../DB/ConectionDB");
// Estos son los datos que debe manejar el formulario, ya que son con los que va a llenar la Api
const Pokemons = mongoose.Schema({
    codigo:{
        type:'string',
        required: true,
    },
    nombre: {
        type: 'string',
    },
    descripcion: {
        type: 'string',
    },
    altura: {
        type: 'string',
    },
    peso: {
        type: 'string',
    },
    especie: {
        type: 'string',
    },
    habilidades_especiales: {
        type: 'string',
    },
    sexo: {
        type: 'string',
    },
    tipo: {
        type: 'string',
    },
    debilidad: {
        type: 'string',
    }
},
);

module.exports = mongoose.model('Pokemons', Pokemons);