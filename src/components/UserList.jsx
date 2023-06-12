import React from 'react'
import UserCard from './UserCard'
import { set } from 'react-hook-form'

const UserList = ({users, deleteUser, modalToggle, setIsUserToUpdate,}) => {

  return (
    <section className=' grid gap-4 px-4 sm:grid-cols-2 xl:grid-cols-3'>
      {
        users.map( user => (
          <UserCard 
          deleteUser={deleteUser}
          user={user} 
          modalToggle={modalToggle}
          key={user.id}
          setIsUserToUpdate={setIsUserToUpdate}
          />
        ))
      }
    </section>
  )
}

export default UserList