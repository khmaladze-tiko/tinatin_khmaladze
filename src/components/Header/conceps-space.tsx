"use client"
import React, { useState } from "react";

const ConceptSpace = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <div>
            <nav>
                <ul>
                    <li onClick={toggleMenu}>
                        Concept Space
                    </li>
                </ul>
            </nav>
            {isMenuOpen && (
                <div>
                    <ul>
                        <li>Overview</li>
                        <li>Cafe</li>
                        <li>Library</li>
                        <li>TBC Concept Branches</li>
                    </ul>
                </div>
            )}
            
        </div>
    )
}

export default ConceptSpace;