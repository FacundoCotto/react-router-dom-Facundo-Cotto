import React from 'react'
import { useParams } from 'react-router-dom'

function ProfilePage() {
  // "id" es el parametro de la ruta
  const { id } = useParams();

  return (
    <div className='bg-salte-900 min-h-screen flex justify-center items-center'>
        <h1 className='text-5xl font-bold text-white underline'>Este es el perfil de alguien con el siguiente id: 
          <span className='font-bold capitalize text-yellow-400'> {id}</span> </h1>
    </div>
  )
}

export default ProfilePage  