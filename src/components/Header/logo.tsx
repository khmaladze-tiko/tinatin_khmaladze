import React from "react";
import { Icons } from "../Icons";

const Logo = () => {
    return(
        <>
        <div className="header__logo">
            <Icons.tbcIcon/>
        </div>
        <div className="header__logo-mobile">
            <Icons.tbcMini/>
        </div>
        </>
        
        
        
    )
}

export default Logo;