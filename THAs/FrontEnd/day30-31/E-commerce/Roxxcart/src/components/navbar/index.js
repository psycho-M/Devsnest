import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  LogoImag,
  IconLink,
} from "./NavbarElements";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import svg from '../../assets/logo.svg';

import { updateLocalStorageCartData } from "../../redux/actions";
import { BiWindows } from "react-icons/bi";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const totalFav = useSelector(state => state.favorites).length;
  const cartQuantity = useSelector(state => state.cart).length;
  const dispatch = useDispatch();

  
  const cartLocalStorageHandler = () =>{
    dispatch(updateLocalStorageCartData(cart));
  }
  window.onload = function(){
    cartLocalStorageHandler()
  }

  return (
    <>
      <IconContext.Provider
        value={{ style: { fontSize: "30px", color: "#000" } }}
      >
        <Nav>
          <NavLogo to="/">
            <LogoImag src={svg} />{" "}
          </NavLogo>
          <Bars />

          <NavMenu>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/Shop" activeStyle>
              Shop
            </NavLink>
            <NavLink to="/about" activeStyle>
              About
            </NavLink>
          </NavMenu>
          <IconLink>
            <Link style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: "none", color: "black"}} to="/cart" activeStyle onClick={cartLocalStorageHandler}>
              <FiShoppingCart />
              <span style={{
                // position: 'absolute',
                fontWeight: '500', 
                fontSize: '1.3rem',
                marginLeft: "5px"
              }}
              >
                {cartQuantity}
              </span>
            </Link>
            <Link style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: "none", color: "black"}} to='/favorites'>
              <MdFavoriteBorder value={totalFav} />
              <span style={{
                // position: 'absolute',
                fontWeight: '500', 
                fontSize: '1.3rem',
                marginLeft: "5px"
              }}
              >
                {totalFav}
              </span>
            </Link>
            
            <Link to="/loginPage">
              <FiUser />
            </Link>
          </IconLink>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
export default Navbar;
