import React from 'react';
import './BagContainer.css';
import {BagItemCard , Empty} from '../../components/index';
import {emptyBag} from '../../actions/bag';
import {useDispatch, useSelector} from 'react-redux';
import { findTotal } from '../../helpers/general';
export default function BagContainer() {
    const bag = useSelector(state => state.bagStore);
    const dispatch = useDispatch();
    // console.log(products);
    function checkOutHandler(event){
        console.log("check out");
        let checkoutCheck = true;
        bag.map(product => {
            if( product.size === undefined ){
                window.alert('Please select size for ' + product.productName);
                checkoutCheck = false;
                return ;
            }
        })
        if( checkoutCheck ){
            dispatch(emptyBag());
        }
    }
    return (
        <div className="bag-container flex-row " >
            {
                bag.length === 0 ? 
                <Empty />
                :
                bag.map((product,index) =>{
                    return (
                        <BagItemCard item={product} />
                    )
                })
            }
            <div className="bag-action" >
                <div className="total-amount center" >
                    <p>₹ { findTotal(bag) }</p>
                </div>
                <div 
                    className={`checkout center ${ bag.length > 0 ? "" : "inactive"} `} 
                    onClick={ checkOutHandler }
                >
                    <p>
                        Checkout <i class="fas fa-arrow-circle-right"></i>
                    </p>
                </div>
            </div>
        </div>
    )
}
