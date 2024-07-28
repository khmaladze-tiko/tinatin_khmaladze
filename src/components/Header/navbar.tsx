"use client"
import React, { useState } from "react";
import Dropdown from "./dropdown";


const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleDropdownClick = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const dropdownData = [
        {
            title: 'Products',
            links: ['Overview', 'Packages', 'Private Banker']
        },
        {
            title: 'Offers',
            links: ['Overview', 'Offers', 'Events']
        },
        {
            title: 'Concept space',
            links: ['Overview', 'Cafe', 'Library', 'TBC Concept Branches']
        }
    ];

    return (
        <>
            <div className="header__menu">
                {dropdownData.map((data, index) => (
                    <Dropdown
                        key={index}
                        title={data.title}
                        links={data.links}
                        activeDropdown={activeDropdown}
                        handleDropdownClick={handleDropdownClick}
                    />
                ))}
            </div>
            <div className={`header__dropdown-bg ${activeDropdown ? 'active' : ''}`}>
                <div className="header__dropdown-bg-inner">
                    <a className="header__dropdown-mainLink">DIGITAL BANKING</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;