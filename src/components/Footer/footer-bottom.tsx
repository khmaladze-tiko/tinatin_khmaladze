import React from "react";
import Logo from "../Header/logo";
import Language from "../Header/language";
import { Icons } from "../Icons";

type FooterBottomProps = {
    mobileClass?: string;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ mobileClass = "" }) => {
    return(
        <div className={`footer-bottom ${mobileClass}`}>
           <div className="footer-logo">
                <Icons.tbcMini/>
                <p>2024 All rights reserved</p>
            </div>
            <div className="footer-policy">
                <a className="footer-policy-a">Privacy policy</a>
                <a className="footer-policy-a">Terms</a>
            </div>
            
        </div>
    )
}

export default FooterBottom;