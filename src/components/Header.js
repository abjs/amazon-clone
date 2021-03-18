import React from "react";
import "./Header.css";
import amazon_logo from "./amazon_logo.png";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img className='header__logo' src={amazon_logo} alt='amazon_logo' />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />

        <SearchIcon className='header__search__logo' />
      </div>
      <div className='header__nav'>
        <div className='header__nav__option'>
          <span className='header__nav__optionLineOne'>Hello,Sign In</span>
          <span className='header__nav__optionLineTwo'>Sign In</span>
        </div>
        <div className='header__nav__option'>
          <span className='header__nav__optionLineOne'>Returns</span>
          <span className='header__nav__optionLineTwo'>& Order</span>
        </div>
        <div className='header__nav__option'>
          <span className='header__nav__optionLineOne'>Your</span>
          <span className='header__nav__optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header__nav__optionBasket'>
            <ShoppingCartIcon
            // className="header__nav__optionBasket"
            />

            <span className='header__nav__optionLineTwo header__nav__optionCount'>
              0
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
