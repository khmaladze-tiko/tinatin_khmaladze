"use client"
import React, { useState } from "react";
import Products from "./products";
import Offers from "./offers";
import ConceptSpace from "./conceps-space";

const Navbar = () => {

    return(
        <div className="header__menu">
            <Products/>
            <Offers/>
            <ConceptSpace/>
        </div>
    )
}

export default Navbar;