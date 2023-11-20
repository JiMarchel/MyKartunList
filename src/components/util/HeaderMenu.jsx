import React from 'react'

const HeaderMenu = ({title}) => {
  return (
    <div>
      <h3 className='text-sm md:text-2xl text-center text-primary-800 p-6'>{title}</h3>
    </div>
  )
}

export default HeaderMenu