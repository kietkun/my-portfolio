import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    openNav: () => void;
}

function Nav({openNav}: Props) {
  return (
    <div className='w-[100%] sticky z-[10000] top-0 h-[12vh] bg-cyan-500 shadow-md'>
        <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
                MY
                <span className='text-gray-500'> PORTFOLIO</span>
            </h1>
            <div className='nav-link'>Home</div>
            <div className='nav-link'>About</div>
            <div className='nav-link'>Experiences</div>
            <div className='nav-link'>Contact</div>
            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-gray-500' />
            </div>
        </div>
    </div>
  )
}

export default Nav