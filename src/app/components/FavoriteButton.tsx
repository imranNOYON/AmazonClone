import Link from "next/link";
import React from "react";

const FavoriteButton = () => {
  return (
    <Link
      href={"/favorite"}
      className="headerItem text-xs text-gray-100 hidden lg:inline-flex
    flex-col justify-center items-start relative"
    >
      <p>Marked</p>
      <p className="text-white font-bold">& Favorite</p>
      <span className="absolute right-1 top-2 w-4 h-4 border-[1px]
      border-gray-400 headerItem px-0 text-xs text-colors-amazonOrangeDark
      font-medium rounded-sm">
        0
        </span>
    </Link>
  );
};

export default FavoriteButton;
