"use client"
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='w-full h-full bg-black/80 absolute top-0 left-0 flex flex-col 
    items-center justify-center'>
        <RotatingLines
         visible={true}
         strokeColor='5'
         animationDuration='0.75'
         ariaLabel='rotating-lines-loading'
        />
        <p className='text-white text-2xl font-bold tracking-widest'>Loading...</p>
    </div>
  )
}

export default Loading