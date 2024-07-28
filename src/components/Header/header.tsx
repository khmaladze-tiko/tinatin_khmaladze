"use client";

import React, {useState} from "react";
import Navbar from "./navbar";
import Logo from "./logo";
import Search from "./search";
import Subscribe from "./subscribe";
import Language from "./language";
import HeaderMenuMobile from "./header-mobile";
import BurgerMenu from "./burger-menu";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);


  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="header">
      <div>
        {isMenuVisible && <HeaderMenuMobile />}
      </div>
      <div className="header__container">

        <Logo />
        <Navbar />
        <div className="header__buttons">
          <Search />
          <Subscribe />
          <Language extraClass={'langExtra'}/>
        </div>
        <BurgerMenu toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;
