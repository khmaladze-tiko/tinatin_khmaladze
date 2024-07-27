import React from "react";
import { Icons } from "../icons";

const FooterMain = () => {
    return(
        <div className="footer-nav">
            <div className="footer-products">
                <h3 className="column-text">Products</h3>
                <nav>
                    <ul className="footer-ul">
                        <li className="footer-li"> <a>Packages</a></li>
                        <li className="footer-li"><a>Private banker</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-lifestyle">
                <h3 className="column-text">Lifestyle</h3>
                    <nav>
                        <ul className="footer-ul">
                            <li className="footer-li"><a>Offers</a></li>
                            <li className="footer-li"><a>Events</a></li>
                        </ul>
                    </nav>
                </div>
            <div className="footer-concept">
                <h3 className="column-text">Concept Space</h3>
                <nav>
                    <ul className="footer-ul">
                        <li className="footer-li"><a>Library</a></li>
                        <li className="footer-li"><a>Cafe</a></li>
                    </ul>
                </nav>
            </div>
            <div className="footer-contact">
                <div>
                    <h3 className="column-text">Contact us</h3>
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
    )
}

export default FooterMain;