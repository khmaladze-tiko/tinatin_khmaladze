"use client"
import React, { useState } from "react";

const Offers = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <div className="header__menu-item">
            <nav>
                <ul>
                    <li onClick={toggleMenu}>
                        Offers
                    </li>
                </ul>
            </nav>
            {isMenuOpen && (
                <div>
                    <ul>
                        <li>Overview</li>
                        <li>Offers</li>
                        <li>Events</li>
                    </ul>
                </div>
            )}
            
        </div>
    )
}

export default Offers;