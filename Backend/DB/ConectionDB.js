const mongoose = require('mongoose');

let conexion ='url mongo' 

mongoose.connect(conexion)
    .then(event=> console.log("conectado a mongo"))
    .catch(error=> console.log(error))
module.exports = mongoose
