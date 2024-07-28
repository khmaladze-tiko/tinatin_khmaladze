"use client";
import React, { useState } from 'react';

interface BurgerMenuProps {
    toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ toggleMenu }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
        toggleMenu();
    };

    return (
        <div className={`hamburger ${isActive ? 'is-active' : ''}`} onClick={toggleActive}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    );
};

export default BurgerMenu;