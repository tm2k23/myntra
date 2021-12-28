import React from 'react';
import './BagContainer.css';
import {BagItemCard} from '../../components/index'
import {useDispatch, useSelector} from 'react-redux';
export default function BagContainer() {
    const products = useSelector(state => state.bagStore);
    console.log(products);
    function checkOutHandler(event){
        console.log("Proceed to checkout, here is what will happen");
        console.log("1. We need to close the modal as well");
        console.log("2. We need to make the bag empty");
    }
    return (
        <div className="bag-container flex-row " >
            {
                products.map((product,index) =>{
                    return (
                        <BagItemCard item={product} />
                    )
                })
            }
            <div className="bag-action" >
                <div className="total-amount center" >
                    <p>₹ 56009</p>
                </div>
                <div className="checkout center" >
                    <p
                        onClick={ checkOutHandler }
                    >Checkout <i class="fas fa-arrow-circle-right"></i></p>
                </div>
            </div>
        </div>
    )
}
