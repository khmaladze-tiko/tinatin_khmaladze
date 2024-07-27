import React from "react";
import Language from "../Header/language";
import Logo from "../Header/logo";

const FooterTop = () => {
    return(
        <div className="footer-top">
            <div className="footer-logo">
                <Logo/>
            </div>
            <div>
                <Language/>
            </div>
            
        </div>
    )
}

export default FooterTop;




