import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import libraryLogo from "../Library.svg"

const Nav = ()=>{
    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                <img src={libraryLogo} className="logo" alt="" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="/" className="nav__link">Home</a>
                         
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                        Books</a>
                    </li>
                    <button className="btn__menu">
                        <FontAwesomeIcon icon = "bars"/>
                    </button>
                        <li className="nav__icon">
                            <a href="/cart" className="nav__link">
                             <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> 
                            </a>
                            <span className="cart__length">3

                            </span></li>
                </ul>
                <div className="btn__menu btn__menu--close">
                    <FontAwesomeIcon icon= "times"/>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a href="/" className="menu__link">Home</a>
                        </li>
                        <li className="menu__list">
                            <a href="/" className="menu__link">Books</a>
                        </li>
                        <li className="menu__list">
                            <a href="/" className="menu__link">cart</a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    )
    
}




export default Nav;