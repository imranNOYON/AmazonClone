import React from 'react'
import { MdMenu } from 'react-icons/md'

const HeaderBottom = () => {
  return (
    <div className='text-white/80 bg-colors-amazonLight'>
        <div className='flex items-center space-x-3 py-1 pl-6 text-sm'>
            <p className='flex items-center link'>
                <MdMenu className='text-xl mr-1'/> 
                All
            </p>
            <p className='link'> Today&apos;s Deal</p>
            <p className='link hidden lg:inline-flex'>Customer Service</p>
            <p className='link hidden lg:inline-flex'>Registry</p>
            <p className='link hidden lg:inline-flex'>Gift Cards</p>
            <p className='link hidden lg:inline-flex'>Sell</p>
         <p className='text-colors-amazonYellowDark tracking-wide underline
         underline-offset-2 decoration-[1px]'>please signin to access your cart1</p>
        </div>
    </div>
  )
}

export default HeaderBottom