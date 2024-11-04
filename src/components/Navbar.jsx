import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./Navbar/NavItems";
import { FaRegUserCircle } from "react-icons/fa";

function Navbar() {
  const navItems = ["Home", "About", "Opt", "Another Opt"];
  return (
    <div className=" mx-20 my-4 flex items-center justify-between relative">
      <h1 className=" text-green font-bold text-3xl tracking-tight">
      <Link to='#'>Dummy</Link>
      </h1>
      <ul className=" flex gap-8 bg-secondary/10 px-6 py-2 rounded-2xl absolute left-1/2 -translate-x-1/2">
        {navItems.map((item, index) => (
          <NavItems key={index} item={item} />
        ))}
      </ul>
      <div className=" text-green text-3xl cursor-pointer hover:bg-green-dark/35 rounded-lg p-1 ">
        <FaRegUserCircle />
      </div>
    </div>
  );
}

export default Navbar;
