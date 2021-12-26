import React from 'react'
import './Modal.css';
import {BagContainer , WishListContainer} from '../index';
export default function Modal() {
    let modalContent="wishlist";
    function renderSwitch( container ){
        switch(container){
            case "bag":
                return <BagContainer/>;
            case "wishlist":
                return <WishListContainer/>;
            default:
                return <BagContainer/>;
        }
    }
    return (
        <div className="modal" >
            <button className="modal-close-button" > <i class="fas fa-times"></i> </button>
            {
                renderSwitch(modalContent)
            }
        </div>
    )
}
