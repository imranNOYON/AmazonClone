"use client"
import React, { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'

const SearchInput = () => {
    const [searchQuery,setSearchQuery]=useState("")

  return (
    <div className='flex-1 h-10 mx-4 hidden md:inline-flex items-center justify-between relative'>
        <input type="text" placeholder='Search amazon products'
        className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black
        border-[3px] border-transparent outline-none focus-visible:border-colors-amazonOrange'
        value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
        />
        {
            searchQuery && (
                <MdOutlineClose onClick={()=>setSearchQuery} className='text-xl
                text-colors-amazonLight hover:text-red-600 absolute right-20
                duration-300 cursor-pointer'/>
            )
        }
     <span className='w-12 h-full bg-colors-amazonOrange hover:bg-colors-amazonOrangeDark
     duration-300 cursor-pointer text-black text-2xl flex items-center justify-center rounded-tr-md rounded-br-md right-0'> 
        <HiOutlineSearch/>
     </span>
    </div>
  )
}

export default SearchInput