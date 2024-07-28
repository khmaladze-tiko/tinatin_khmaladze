"use client"
import React, { useState } from "react";

const Products = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <div className="header__menu-item">
            <nav>
                <ul>
                    <li onClick={toggleMenu}>
                        Products
                    </li>
                </ul>
            </nav>
            {isMenuOpen && (
                <div>
                    <ul>
                        <li>Overview</li>
                        <li>Packages</li>
                        <li>Private Banker</li>
                    </ul>
                </div>
            )}
            
        </div>
    )
}

export default Products;