import React from "react";
import { Link } from "react-router-dom";

function NavItems({ item }) {
  return (
    <li className=" text-secondary text-lg hover:text-green text-nowrap">
      <Link to='#'>{item}</Link>
    </li>
  );
}

export default NavItems;
