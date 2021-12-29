import React from 'react'
import './ViewSimilarButton.css'
import { useDispatch } from 'react-redux';
import { showSimilarProducts } from '../../actions/similarProducts';
export default function ViewSimilarButton({item , externalClassName}) {
    const dispatch = useDispatch();
    return (
        <div 
            className={`view-similar-button ${externalClassName} center`}
            onClick={() => {
                dispatch(showSimilarProducts(item))
            }}
        >
            <p className="small-screen" >
                <i className="fas fa-th-large"></i>
            </p>
            <p className="large-screen" >
                View Similar
            </p>
        </div>
    )
}
