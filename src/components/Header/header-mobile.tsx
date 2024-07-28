"use client";
import React, { useState } from 'react';
import { Icons } from "../Icons";
import FooterBottom from '../Footer/footer-bottom';


const HeaderMenuMobile = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    
    const handleDropdownClick = (dropdown: string) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };


    return (
        <div className="header__menu-mobile">
            <div className="header__menu-mobile-inner">
                <div className="header__menu-mobile-wrapper">
                    <div className="header__mobile-dropdown" onClick={() => handleDropdownClick('products')}>
                        <div className="header__mobile-dropdown-text">Products</div>
                        <div className={`header__mobile-dropdown-arrow ${openDropdown === 'products' ? 'rotated' : ''}`}>
                            <Icons.dropdownArrow />
                        </div>
                    </div>
                    {openDropdown === 'products' && (
                        <div className="header__mobile-dropdown-list">
                            <div className="header__mobile-dropdown-list-inner">
                                <div className="header__mobile-dropdown-list-item">
                                    Overview
                                </div>
                                <div className="header__mobile-dropdown-list-item">
                                    Packages
                                </div>
                                <div className="header__mobile-dropdown-list-item">
                                    Private Banker
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="header__mobile-dropdown" onClick={() => handleDropdownClick('offers')}>
                        <div className="header__mobile-dropdown-text">Offers</div>
                        <div className={`header__mobile-dropdown-arrow ${openDropdown === 'offers' ? 'rotated' : ''}`}>
                            <Icons.dropdownArrow />
                        </div>
                    </div>
                    {openDropdown === 'offers' && (
                        <div className="header__mobile-dropdown-list">
                            <div className="header__mobile-dropdown-list-inner">
                                <div className="header__mobile-dropdown-list-item">
                                    Overview
                                </div>
                                <div className="header__mobile-dropdown-list-item">
                                    Offers
                                </div>
                                <div className="header__mobile-dropdown-list-item">
                                    Events
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="header__mobile-dropdown" onClick={() => handleDropdownClick('concept')}>
                        <div className="header__mobile-dropdown-text">Concept space</div>
                        <div className={`header__mobile-dropdown-arrow ${openDropdown === 'concept' ? 'rotated' : ''}`}>
                            <Icons.dropdownArrow />
                        </div>
                    </div>
                    {openDropdown === 'concept' && (
                        <div className="header__mobile-dropdown-list">
                            <div className="header__mobile-dropdown-list-inner">
                                <div className="header__mobile-dropdown-list-item">
                                    Overview
                                </div>
                                <div className="header__mobile-dropdown-list-item">
                                    Cafe
                                </div>
                                <div className="header__mobile-dropdown-list-item">
                                    Library
                                </div>
                                <div className="header__mobile-dropdown-list-item">
                                    TBC Concept Branches
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="header__mobile-contants">
                        <div className="header__mobile-contants-inner">
                            <div className="header__mobile-contacts-heading">Contact us</div>
                            <nav>
                                <ul className="footer-ul">
                                    <li className="footer-li">
                                        <a className="contact-us">
                                            <Icons.call/>
                                            <p>+995 32 2 27 27 00</p>
                                            
                                        </a>
                                    </li>
                                    <li className="footer-li">
                                        <a className="contact-us">
                                            <Icons.mail/>
                                            <p>info@tbcconcept.ge</p>
                                            
                                        </a>
                                    </li>
                                    <li className="footer-li">
                                        <a className="contact-us">
                                            <Icons.location/>
                                            <p>Blanches</p>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div>
                                <h3 className="column-text">follow us</h3>
                                <nav>
                                    <ul className="follow-ul">
                                        <li>
                                            <a className="social-icon">
                                                <Icons.facebook/>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="social-icon">
                                                <Icons.instagram/>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBottom mobileClass={'mob-class'}/>
            </div>

        </div>

    )
}

export default HeaderMenuMobile;