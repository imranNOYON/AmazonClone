import logo from "../../assets/logo.png"; // Import as a default import, no need for destructuring
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import SearchInput from "./SearchInput";
import SignInButton from "./SignInButton";
import FavoriteButton from "./FavoriteButton";
import CartButton from "./CartButton";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className='w-full h-20 bg-colors-amazonBlue text-colors-lightText'>
        <div className="h-full w-full mx-auto inline-flex items-center gap-1
        md:gap-3 px-4">
          <Link href={"/"}>
            <Image src={logo} alt='logo' width={112} height={40} className='w-28 object-cover' />
          </Link>
          <div className="headerItem hidden lg:inline-flex gap-1">
            <SlLocationPin className="text-lg text-white"/>
            <div className="text-xs">
              <p>Deliver to</p>
              <p className="text-white">USA</p>
            </div>
          </div>
          <SearchInput/>
          <SignInButton/>
          <FavoriteButton/>
          <CartButton/>
        </div>
      </div>
      <HeaderBottom/>
    </header>
  );
};

export default Header;
