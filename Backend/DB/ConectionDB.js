const mongoose = require('mongoose');

let conexion ='mongodb+srv://Admin:Admin123@cluster0.hvudlpq.mongodb.net/?retryWrites=true&w=majority' 
//mongosh "mongodb+srv://cluster0.0rag2qq.mongodb.net" --apiVersion 1 --username Admin
//mongodb+srv://Admin:Admin123@cluster0.0rag2qq.mongodb.net/?retryWrites=true&w=majority

mongoose.connect(conexion)
    .then(event=> console.log("conectado a mongo"))
    .catch(error=> console.log(error))
module.exports = mongoose