"use client";
import { Product } from "@/lib/type";
import Image from "next/image";
import { useState } from "react";

interface Props {
  product: Product;
}

const ProductImage = ({ product }: Props) => {
  const [imgUrl, setImgUrl] = useState(product?.images[0]);

  return (
    <div className="flex flex-start">
      <div>
      {product?.images?.map((item, index) => (
        <Image
           onClick={()=>setImgUrl(item)}
          src={item}
          alt="productImg"
          key={index}
          width={200}
          height={200}
          className={`w-24 h-24 object-contain cursor-pointer opacity-80 
          hover:opacity-100 duration-300 border border-gray-200 mb-1 ${imgUrl===item &&
            "border-gray-500 rounded-sm opacity-100"
          }`}
        />
      ))}
      </div>
     <div className="bg-gray-100 rounded-md ml-5 w-full max-h-[450px]">
     <Image
        src={imgUrl}
        alt={product.title}
        width={500}
        height={500}
        priority
        className="w-full h-full object-contain"
      />
     </div>
    </div>
  );
};

export default ProductImage;
