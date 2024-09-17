import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid'
import React from 'react'

function Footer() {
  return (
    <div className='pt-[8rem] pb-[4rem] bg-black'>
        <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-cyan-400'>
                    <MapIcon className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem]'/>
                </div>
                <div>
                    <p className='text-[17px] w-[100%] text-white opacity-60'>Hue, VietNam</p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-cyan-400'>
                    <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem]'/>
                </div>
                <div>
                    <p className='text-[17px] w-[100%] text-white opacity-60'>+84 32 543 5111</p>
                </div>
            </div>
            <div className='flex items-center space-x-6'>
                <div className='md:w-[5rem] md:h-[5rem] w-[4rem] h-[4rem] flex items-center justify-center rounded-full bg-cyan-400'>
                    <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem]'/>
                </div>
                <div>
                    <p className='text-[17px] w-[100%] text-white opacity-60'>kietnguyen.work@gmail.com</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer