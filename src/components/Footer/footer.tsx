import React from "react";
import FooterTop from "./footer-top";
import FooterMain from "./footer-main";
import FooterBottom from "./footer-bottom";
import FooterMenuMobile from "./footer-mobile";



const Footer = () => {
    return (
        <div className="footer">
            <FooterTop/>
            <FooterMain/>
            <FooterBottom mobileClass={''}/>
            <FooterMenuMobile/>
        </div>
    )
}

export default Footer;