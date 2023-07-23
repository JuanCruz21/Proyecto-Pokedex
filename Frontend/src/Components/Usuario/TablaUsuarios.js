import React from 'react'

function TablaUsuarios(props) {
  const { Usuarios, onDelete, onView } = props;

  return (
    <>
    <a  className='btn btn-info' href='/FormUsuario'>Agregar</a>
    <table className='table table-stripe'>
      <thead className='table-primary'>
        <tr>
          <th>Cedula</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Dirección</th>
          <th>correo</th>
          <th>telefono</th>
          <th>genero</th>
          <th>fecha_nacimiento</th>
          <th>estado</th>
          <th>rol</th>
          <th>Contraseña</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Usuarios.map((usuario) => {
          return (<tr key={Usuarios._id}>
            <td>{usuario.cedula}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.direccion}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.telefono}</td>
            <td>{usuario.genero}</td>
            <td>{usuario.fecha_nacimiento}</td>
            <td>{usuario.estado}</td>
            <td>{usuario.rol}</td>
            <td>{usuario.password}</td>
            <td>
              <button className='btn btn-warning' onClick={() => { onView(usuario) }}>Ver</button>
            </td>
            <td>
              <button className='btn btn-danger' onClick={() => { onDelete(usuario._id) }}>Eliminar</button>
            </td>
          </tr>)
        })}
      </tbody>
    </table>
    </>
  )
}

export default TablaUsuarios;