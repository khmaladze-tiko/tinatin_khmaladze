import React from 'react';

interface DropdownProps {
    title: string;
    links: string[];
    activeDropdown: string | null;
    handleDropdownClick: (dropdown: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ title, links, activeDropdown, handleDropdownClick }) => {
    const isActive = activeDropdown === title.toLowerCase();

    return (
        <div className="header__dropdown" onClick={() => handleDropdownClick(title.toLowerCase())}>
            <div className="header__dropdown-toggle">
                <div className="header__dropdown-text">{title}</div>
                <div className={`header__dropdown-line ${isActive ? 'active' : ''}`}></div>
            </div>
            <div className={`header__dropdown-list ${isActive ? 'active' : ''}`}>
                {links.map((link, index) => (
                    <a key={index} className="header__dropdown-link">{link}</a>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;