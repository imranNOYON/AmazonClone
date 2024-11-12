import Link from "next/link";
import React from "react";
import cartIcon from "../../assets/cartIcon.png";
import Image from "next/image";
const CartButton = () => {
  return (
    <Link href={"/cart"} className="headerItem text-xs text-gray-100 relative">
      <Image
        className="w-auto object-cover h-8"
        src={cartIcon}
        alt="cartIcon"
      />
      <p className="text-xs text-white font-bold mt-3">Cart</p>
      <span className="absolute text-colors-amazonYellowDark text-sm top-2 left-[29px] font-semibold">
        0
      </span>
    </Link>
  );
};

export default CartButton;
