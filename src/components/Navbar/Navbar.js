import React from 'react';
import logo from '../../assets/images/logo.png';
import './Navbar.css';
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Profile } from "../../assets/images/profile.svg";
import { ReactComponent as Wishlist } from "../../assets/images/heart.svg";
import { ReactComponent as Bag } from "../../assets/images/bag.svg";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {Link } from "react-router-dom";
import {openModal} from '../../actions/modals';
export default function Navbar() {
    const [isSearchActive , setIsSearchActive] = useState(!!!!false);
    const [query , setQuery] = useState(null);
    console.log(query);
    const dispatch = useDispatch();
    const navLinks = [
        "MEN",
        "WOMEN",
        "KIDS",
        "HOME & LIVING",
        "OFFERS"
    ];
    const bagItemCount = useSelector(state => state.bagStore.length);
    return (
        <div className=" navbar flex-row" >
            <Link to="/">
                <img 
                    src={logo} 
                    alt="logo" 
                    className = {isSearchActive ? "logo mobile-hide" : "logo"}
                />
            </Link>
            <div className="nav-links-container flex-row ">
                {
                    navLinks.map((navLink, index) => {   
                        return (
                            <Link to="/" key={index}>
                                <div className="nav-link"> {navLink} </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className={isSearchActive ? "search-container flex-row center " : "mobile-hide search-container flex-row center "}>
                <span className={ !isSearchActive ? "mobile-hide back-from-search " : " back-from-search" }>
                    <i class="fas fa-arrow-left"></i>
                </span>
                <Search className="search-icon" />
                <input 
                    type="text" 
                    className="search-box"
                    placeholder='Search for products, brands...'
                    value={query!==null ? query : ""}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            let searchQuery = query;
                            setQuery(null);
                            console.log("Search" , setQuery);
                        }
                    }}
                >
                </input>
                <span className={(query===null || query==="") ? "hide" : "clear-query-button"} >
                    <i class="far fa-times-circle"></i>
                </span>
            </div>
            <div className={isSearchActive ? "mobile-hide action-container flex-row" : "action-container flex-row"}  >
                <div 
                    className="action-item mobile-search-button" 
                    onClick={() => setIsSearchActive(true)}
                >
                    <Search className="action-icon" />
                </div>
                <div className="action-item" >
                    <Profile className="action-icon" />
                    <p className="action-text">Profile</p>
                </div>
                <div className="action-item" 
                    onClick={() => dispatch(openModal('wishlist'))}
                >
                    <Wishlist className="action-icon" />
                    <p className="action-text">Wishlist</p>
                </div>
                <div className="action-item" 
                    onClick={() => dispatch(openModal('bag'))}
                >
                    <Bag className="action-icon" />
                    {bagItemCount!==0 && <p className="bag-item-count">{bagItemCount} </p>}
                    <p className="action-text">Bag</p>
                </div>
            </div>
        </div>
    )
}
