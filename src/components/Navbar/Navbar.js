// This is the navbar component

import React from 'react';
import logo from '../../assets/images/logo.png';
import './Navbar.css';
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Profile } from "../../assets/images/profile.svg";
import { ReactComponent as Wishlist } from "../../assets/images/heart.svg";
import { ReactComponent as Bag } from "../../assets/images/bag.svg";
export default function Navbar() {
    return (
        <div className=" navbar flex-row" >
            <img src={logo} alt="logo" className="logo" />
            <div className="nav-links-container flex-row ">
                <div className="nav-link"> MEN </div>
                <div className="nav-link"> WOMEN </div>
                <div className="nav-link"> KIDS </div>
                <div className="nav-link"> HOME & LIVING </div>
                <div className="nav-link"> OFFERS </div>
            </div>
            <div className="search-container flex-row center ">
                <Search className="search-icon" />
                <input 
                    type="text" 
                    className="search-box"
                    placeholder='Search for products, brands and more'
                >
                </input>
            </div>
            <div className="action-container flex-row" >
                <div className="action-item" >
                    <Profile className="action-icon" />
                    <p className="action-text">Profile</p>
                </div>
                <div className="action-item" >
                    <Wishlist className="action-icon" />
                    <p className="action-text">Wishlist</p>
                </div>
                <div className="action-item" >
                    <Bag className="action-icon" />
                    <p className="action-text">Bag</p>
                </div>
            </div>
        </div>
    )
}