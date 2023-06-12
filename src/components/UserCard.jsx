import axios from 'axios'
import React, { useEffect, useState, } from 'react'

const UserCard = ({user, deleteUser, modalToggle, setIsUserToUpdate}) => {
  const [profileImage, setProfileImage] = useState()


  
  const getImage = () => { 
    const url = 'https://randomuser.me/api/'
    
    axios
    .get(url)
    .then(({data}) => { setProfileImage(data.results[0].picture.large) })
    .catch((err) => { console.log(err) })  
  }
  
  useEffect(() => {
    if (!user.image_url) {
      getImage()
    }
  }, [])
  
  const handleDelete = () => { 
    deleteUser(user)  
  }

  const handleEdit = () => { 
    setIsUserToUpdate(user)
    modalToggle()
  }

  return (
    <article  className='flex flex-col p-4 border-2 rounded-xl relative mt-24 pt-16 min-w-0 break-words'>
      <div className=' rounded-full  aspect-square w-32 self-center absolute top-0 -translate-y-[50%] '>
        <img className='rounded-full' src={`${profileImage}`} alt="" />
      </div>

      <h3 className=' font-bold text-2xl capitalize border-b-2 py-2'>{user.first_name} {user.last_name}</h3>

      <div className=''>
        <div className=' py-2'>
          <h4 className='uppercase text-slate-400 text-sm'>Email</h4>
          <span>{user.email}</span>
        </div>
        
        <div className='border-b-2 py-2'>
          <h4 className='uppercase text-slate-400 text-sm'>Birthday</h4>
          <span>{user.birthday||'No Date'}</span>
        </div>
      </div>
        
      <div className='flex justify-end gap-2 pt-4 '>
        <button className=' border-2 px-4 py-1 rounded-xl bg-secondary border-secondaryBorder text-2xl text-white flex items-center' onClick={handleDelete}><i className ='bx bx-trash'></i></button>

        <button 
        className=' border-2 px-4 rounded-xl bg-gray-100 border-gray-300 text-gray-300 text-2xl flex items-center' 
        onClick={handleEdit}><i className  ='bx bx-pencil'></i></button>
      </div>

    </article>
  )
}

export default UserCard