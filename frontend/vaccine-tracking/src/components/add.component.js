import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Add = ({navigateTo})=>{
    return(
    <Link className="nav-link add-button" to={navigateTo}>
      <AiFillPlusCircle size={40}/>
    </Link>)
}
export default Add;