"use client"
import { Product } from "@/lib/type";
import { toast } from 'sonner'
import { twMerge } from "tailwind-merge";

interface Props {
  product: Product;
  className?: string;
}

const AddToCart = ({ product, className }: Props) => {
  return (
    <button
    onClick={() => toast.success(`${product.title} added to cart`)}
      className={twMerge(
        "text-sm tracking-wide font-medium mb-2 border-[1px] border-colors-amazonBlue/50 py-2 rounded-full bg-colors-amazonLight hover:bg-colors-amazonYellowDark duration-300",
        className
      )}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
