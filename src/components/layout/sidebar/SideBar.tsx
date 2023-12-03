import React from 'react'
import SideBarItem from './SideBarItem';

const SideBar = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return (
    <div className='fixed left-0 top-0 hidden sm:block w-[12rem] xl:w-[15rem] h-screen border-r bg-white'>
        <div className='flex flex-col'>
            {arr.map(e => (
              <span>{e}</span>
            ))}
            
        </div>
    </div>
  )
}

export default SideBar