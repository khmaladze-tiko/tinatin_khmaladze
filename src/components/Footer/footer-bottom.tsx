import React from "react";
import Logo from "../Header/logo";
import Language from "../Header/language";
import { Icons } from "../Icons";

const FooterBottom = () => {
    return(
        <div className="footer-bottom">
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