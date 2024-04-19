import React, { useState } from 'react';
import {Link, NavLink} from "react-router-dom";
import { TbMenu } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({to, children}) => {
  const [open, setOpen] = useState(false);

  const toogleNavbar = ()=>{
    setOpen(!open);
  }
  return (
    <section className="bg-[#181818] flex flex-col  md:justify-between md:items-center md:flex-row text-white py-3 px-14">
      <div>
        <Link to={"/"}>
          <img src="./s.png" className="w-[40px] h-auto" />
        </Link>
      </div>
      <div className="text-3xl absolute right-12 top-5 cursor-pointer md:hidden">
        <NavLink to={to} onClick={toogleNavbar}>
          {open ? null : <AiOutlineClose />}
          {children}
        </NavLink>
        {open && (
          <div
            onClick={toogleNavbar}
            className="text-3xl absolute right-8 cursor-pointer md:hidden"
          >
            <TbMenu className="absolute" />
          </div>
        )}
      </div>
      {open || (
        <ul className=" flex flex-col md:flex-row items-center gap-5 md:py-0 text-xl w-full h-[70vh] md:h-auto md:w-auto transition-all duration-500 ease-in">
          <li className="my-7 md:my-0">
            <NavLink
              to="/about"
              className="hover:bg-[#ffbe40] hover:text-black px-3 py-2 rounded-md font-medium"
            >
              About
            </NavLink>
          </li>
          <li className="my-7 md:my-0">
            <NavLink
              to="/portfolio"
              className="hover:bg-[#ffbe40] hover:text-black px-3 py-2 rounded-md font-medium"
            >
              Portfolio
            </NavLink>
          </li>

          <li className="my-7 md:my-0">
            <NavLink
              to="/contact"
              className="hover:bg-[#ffbe40] hover:text-black px-3 py-2 rounded-md font-medium"
            >
              Contact
            </NavLink>
          </li>

          <li className="my-7 md:my-0">
            <NavLink
              to="/login"
              className="md:block bg-[#FFBE40] p-2 font-bold rounded-lg text-black"
            >
              LOGIN
            </NavLink>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Header

/*
const Header = () => {
  return (
  <section 
      
      <nav>
        
      </nav>
      <div className="block md:hidden">
        
      </div>
    </section>
  );
}

export default Header
*/
