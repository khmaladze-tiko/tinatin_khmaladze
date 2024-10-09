"use client"
import React, { useState } from "react"
import { Icons } from "../icons";
import FooterBottom from "./footer-bottom";
import Logo from "../Header/logo";
import Language from "../Header/language";

const FooterMenuMobile = () => {
    const [showProducts, setShowProducts] = useState(false);
    const [showLifestyle, setShowLifestyle] = useState(false);
    const [showConceptSpace, setShowConceptSpace] = useState(false);

    const toggleProducts = () => setShowProducts(!showProducts);
    const toggleLifestyle = () => setShowLifestyle(!showLifestyle);
    const toggleConceptSpace = () => setShowConceptSpace(!showConceptSpace);



    return (
        <div className="footer__menu-mobile">
            <div className="footer-top-mob">
                <div className="footer-logo-mob">
                    <Logo/>
                </div>
                <div className="footer-lang-mob">
                    <Language extraClass={''}/>
                </div>
            
            </div>
            <div className="footer-mobile-sec">
                <div className="footer-mob-dropdown">
                    <h3 className="footer-mob-sec-title">
                        Products
                    </h3>
                    <button onClick={toggleProducts}>
                        {showProducts ? '>' : '<'}
                    </button>
                </div>
                
                {showProducts && (
                    <ul>
                        <li>Packages</li>
                        <li>Private Banker</li>
                    </ul>
                )}
            </div>
            <div className="footer-mobile-sec">
                <div className="footer-mob-dropdown">
                    <h3 className="footer-mob-sec-title">
                        Lifestyle
                    </h3>
                    <button onClick={toggleLifestyle}>
                        {showLifestyle ? '>' : '<'}
                    </button>
                </div>
                
                {showLifestyle && (
                    <ul>
                        <li>Offers</li>
                        <li>Events Banker</li>
                    </ul>
                )}
            </div>
            <div className="footer-mobile-sec">
                <div className="footer-mob-dropdown">
                    <h3 className="footer-mob-sec-title">
                        Concept Space
                    </h3>
                    <button onClick={toggleConceptSpace}>
                        {showConceptSpace ? '>' : '<'}
                    </button>
                </div>
                
                {showConceptSpace && (
                    <ul>
                        <li>Library</li>
                        <li>Cafe</li>
                    </ul>
                )}
            </div>            
            <div className="footer-mobile-sec">
                <div className="footer-mob-dropdown">
                    <h3 className="footer-mob-sec-title">
                        Contact us
                    </h3>
                </div>
                
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
            </div>
            <div className="footer-mobile-sec">
                <div className="footer-mob-dropdown">
                    <h3 className="footer-mob-sec-title">
                        Follow us
                    </h3>
                </div>
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
            <div className="footer-policy-mob">
                <a className="footer-policy-a-mob">Privacy policy</a>
                <a className="footer-policy-a-mob">Terms</a>
            </div>
            <div className="footer-logo-mob">
                <Icons.tbcMini/>
                <p>2024 All rights reserved</p>
            </div>
            
        </div>

    )
}

export default FooterMenuMobile;
