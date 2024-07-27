import React from "react";
import Navbar from "./navbar";
import Logo from "./logo";
import Search from "./search";
import Subscribe from "./subscribe";
import Language from "./language";

const Header = () => {
    return (
        <div className="header">
            <Logo/>
            <Navbar/>
            <div className="extra">
            <Search/>
            <Subscribe/>
            <Language/>
            </div>
        </div>
    )
}

export default Header;
