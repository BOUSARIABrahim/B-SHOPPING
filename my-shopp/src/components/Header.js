import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from '../img/Logo.png';

function Header() {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={` ${isActive ? 'bg-white py-2 shadow-md ' : 'bg-none py-6'} fixed flex justify-between px-4  w-full z-10 transition-all  border-r-red-700 `}>
      <Link to={'/'}>
        <div>
          <img className='w-[50px]' src={Logo} alt="" />
        </div>
      </Link>

      <button onClick={() => setIsOpen(!isOpen)}  className="flex gap-0 items-center ">
        <BsBag className="text-2xl gap-0  " />

        {itemAmount}
      </button>
    </header>
  );
}

export default Header;



