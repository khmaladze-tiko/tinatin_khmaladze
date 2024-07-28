import React from "react";
import FooterTop from "./footer-top";
import FooterMain from "./footer-main";
import FooterBottom from "./footer-bottom";



const Footer = () => {
    return (
        <div className="footer">
            <FooterTop/>
            <FooterMain/>
            <FooterBottom mobileClass={''}/>
        </div>
    )
}

export default Footer;