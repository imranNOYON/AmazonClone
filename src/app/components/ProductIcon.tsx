import { Product } from '@/lib/type'
import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

const ProductIcon = ({product}:{product:Product}) => {
  return (
    <div className='absolute top-2 right-2 flex items-center gap-2'>
        <p className='bg-transparent text-colors-amazonBlue border border-colors-amazonBlue
        group-hover:bg-colors-amazonBlue group-hover:text-white duration-300 text-xs rounded-full py-1 px-2
        '>
            {product?.discountPercentage}%
        </p>
        <span className='text-xl z-40'>
            <MdFavoriteBorder/>
        </span>
    </div>
  )
}

export default ProductIcon