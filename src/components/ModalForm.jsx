import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ModalForm = ({isModalShown, createUser, restoreModalDefault, isUserToUpdate, updateUser}) => {
  //TODO ********** Forms ********** //
  const {register,handleSubmit,reset} = useForm()
    
  //TODO ******** Funcions ******** //
  const submit = (user) => { 
    if (!user.birthday) user.birthday = null
    if (!user.image_url) user.image_url = null

    if (isUserToUpdate) {
      updateUser(user, reset)
    }else{
      createUser(user, reset)
    }
  }
  

  useEffect(() => {
    if (isUserToUpdate) {
      reset(isUserToUpdate)
    }
  }, [isUserToUpdate])
  
  

  return (
    <section className={`${isModalShown?'visible opacity-100 ':'opacity-0 invisible '} transition-opacity ease-in-out duration-500 fixed top-0 left-0 right-0 h-screen bg-black/50 grid place-content-center `}>

      <form onSubmit={handleSubmit(submit)} className='bg-white w-72 grid gap-3 sm:gap-6 p-4 sm:w-[400px] xl:w-[550px] relative' >
        <h3 className='text-3xl font-bold'>{isUserToUpdate?'Edit User':'New User'}</h3>

        <div className='grid gap-2'>
          <label className='font-bold'  htmlFor="">Name</label>
          <input 
          required
          className='bg-gray-200  py-2 rounded-sm px-2 outline-gray-300' 
          placeholder='Enter your name...' 
          type="text"
          {...register('first_name')} />
        </div>
        
        <div className='grid gap-2'>
          <label className='font-bold' htmlFor="">Last Name</label>
          <input 
          required
          className='bg-gray-200  py-2 rounded-sm px-2 outline-gray-300' 
          placeholder='Enter your last name...' 
          type="text"
          {...register('last_name')} />
        </div>

        <div className='grid gap-2'>
          <label className='font-bold' htmlFor="">Email</label>
          <input 
          required
          className='bg-gray-200  py-2 rounded-sm px-2 outline-gray-300' 
          placeholder='Enter your email...' 
          type="email"
          {...register('email')} />
        </div>

        <div className='grid gap-2'>
          <label className='font-bold' htmlFor="">Password</label>
          <input 
          required
          className='bg-gray-200  py-2 rounded-sm px-2 outline-gray-300' 
          placeholder='Enter yor password...' 
          type="password"
          {...register('password')} />
        </div>
        
        <div className='grid gap-2'>
          <label className='font-bold' htmlFor="">Image URL</label>
          <input 
          className='bg-gray-200  py-2 rounded-sm px-2 outline-gray-300' 
          placeholder='Enter a url to your image...' 
          type="url"
          {...register('image_url')} />
        </div>

        <div className='grid gap-2 mb-4'>
          <label className='font-bold' htmlFor="">Birthday</label>
          <input 
          className='bg-gray-200  py-2 rounded-sm px-2 outline-gray-300' 
          placeholder='' 
          type="date"
          {...register('birthday')} />
        </div>

        <button className='btnPrimary justify-center'>{isUserToUpdate?'Confirm Changes':'Add new user'}</button>

        <button onClick={() => { restoreModalDefault(reset) }} className='absolute top-3 right-3 text-2xl sm:text-3xl hover:text-secondaryBorder' type='button'><i className='bx bx-x'></i></button>


      </form>

    </section>
  )
}

export default ModalForm