import React from 'react'

const UpdatedUsrAlert = ({isUserUpdated, setIsUserUpdated}) => {
  return (
    <section
      className={`${
        isUserUpdated ? "visible opacity-100 " : "opacity-0 invisible "
      } transition-opacity ease-in-out duration-500 fixed top-0 left-0 right-0 h-screen bg-black/50 grid place-content-center `}
    >
      <div className="bg-white w-72 grid gap-3 sm:gap-6 p-4 sm:w-[400px] xl:w-[550px]">
        <h3 className="text-3xl font-bold text-center">User Updated</h3>

        <p className="text-center">User <span className="font-bold">{isUserUpdated}</span> has been updated succesfully</p>

        <button
          onClick={() => setIsUserUpdated(false)}
          className="btnPrimary justify-center"
        >
          Accept
        </button>
      </div>
    </section>
  )
}

export default UpdatedUsrAlert