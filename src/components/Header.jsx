import React from 'react'

const Header = ({modalToggle}) => {
  return (
    <div className='flex justify-between px-5 py-5'>
      <h1 className='font-bold text-3xl'>Users</h1>
      <button onClick={modalToggle} className='bg-primary text-white px-4 py-2 flex gap-1 items-center'><i className='bx bx-plus'></i><span>New User</span></button>
    </div>
  )
}

export default Header