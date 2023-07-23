import React, { useEffect,useState } from 'react'
import { getListaUsuarios,eliminarUsuario } from '../../Api/UsuariosApi'
import TablaUsuarios from './TablaUsuarios'
import Navegador from '../Routes/Navegador'


function Usuario() {
    const [Usuarios,SetUsuarios] = useState([])

    const Listar = () =>{
      getListaUsuarios().then((data)=>{SetUsuarios(data)}).catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
      Listar()
    },[])

    const eliminar = (id) => {
      console.log("Id:" + id)
      eliminarUsuario(id).then((data)=> {
        console.log(data)
        if(data.deletedCount === 1)
        Listar();
      }).catch((err) => {console.log(err)})
    }
  
  const [mostrarLista,setMostrarLista] = useState(true)
    
   const verLista = (e) =>{
      if(mostrarLista){
        setMostrarLista(false)
      }else{
        setMostrarLista(true)
          SetUsuarios({
            id_: null,
            Cedula:"",
            Nombre:"",
            Apellido:"",
            Dirección:"",
            correo:"",
            telefono:"",
            genero:"",
            fecha_nacimiento:"",
            estado:"",
            rol:"",
            Contraseña:"",
          })
      }
    }

  return (
    <div>
      <Navegador/>
      <TablaUsuarios Usuarios = {Usuarios} onDelete = {eliminar} onView={verLista}/> 
    </div>
  )
}

export default Usuario;
