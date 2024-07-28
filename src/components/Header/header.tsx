import React from "react";
import Navbar from "./navbar";
import Logo from "./logo";
import Search from "./search";
import Subscribe from "./subscribe";
import Language from "./language";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">

        <Logo />
        <Navbar />
        <div className="header__buttons">
          <Search />
          <Subscribe />
          <Language extraClass={'langExtra'}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
