import React from 'react';
import {Link } from "react-router-dom";
import './Breadcrumb.css';
export default function Breadcrumb( {addItem} ) {
    const breadCrumb=[
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Clothings',
            link: '/'
        },
        {
            name: 'T-Shirts',
            link: '/'
        }
    ]
    if(addItem) {
        breadCrumb.push(
            {
                name: addItem.productName,
                link: `/${addItem.id}`
            }
        );
    }
    return (
        <div className="breadcrumb-container flex-row" >
            {
                breadCrumb.map( (bread,index) => {
                    return (
                        
                            <div className="breadcrumb-item" key={index} >
                                <Link to={bread.link} key={index}>
                                    {bread.name}
                                </Link>
                            </div>
                        
                    )
                })
            }
        </div>
    )
}
