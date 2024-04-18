import React from 'react';
import {Link} from "react-router-dom";
import { TbMenu } from "react-icons/tb";

const Header = () => {
  return (
    <section className="bg-[#181818] flex justify-between items-center text-white py-3 px-14">
      <div>
        <Link to={"/"}>
          <img src="./s.png" className="w-[40px] h-auto" />
        </Link>
      </div>
      <div className="hidden md:flex justify-between">
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/login" className="hidden md:block bg-[#FFBE40] p-3 font-bold">
          LOGIN
        </Link>
        <Link to="/login" className="block md:hidden">
          <TbMenu />
        </Link>
      </div>
    </section>
  );
}

export default Header
