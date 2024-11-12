// ProductCard.tsx
import { Product } from "@/lib/type";
import Image from "next/image";
import React from "react";
import ProductIcon from "./ProductIcon";
import PriceFormat from "./PriceFormat";
import AddToCart from "./AddToCart";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className='border border-gray-200 rounded-md bg-white overflow-hidden'>
      <div className='relative group overflow-hidden h-72'>
        <Link href={`/product/${product.id}`}> {/* Dynamic Link */}
          <Image
            src={product.images[0]}
            alt="product-image"
            width={600}
            height={600}
            loading='lazy'
            className='w-full h-full object-contain bg-[#f8f8f8] group-hover:scale-110 duration-200'
          />
        </Link>
        <ProductIcon product={product} />
      </div>
      <div className='py-2 px-4 flex flex-col gap-2 justify-between'>
        <div className='flex flex-col gap-1 h-36'>
          <h2 className='line-clamp-1 font-semibold'>{product.title}</h2>
          <p className='text-sm text-colors-amazonBlue/90 line-clamp-3'>{product.description}</p>
          <PriceFormat amount={product.price} />
          <p className='text-sm'>
            Category: <span>{product.category}</span>
          </p>
        </div>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
