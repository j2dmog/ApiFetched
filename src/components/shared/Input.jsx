import React from 'react'

const Input = ({label,...props}) => {
  return (
    <div>
         <label htmlFor="">{label} </label>
          <input {...props} className='block w-[30rem] px-[1rem] py-[0.5rem] border rounded-[0.5rem] outline-none ' />
    </div>
  )
}

export default Input