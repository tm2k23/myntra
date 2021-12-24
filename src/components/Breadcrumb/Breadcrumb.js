import React from 'react'
import './Breadcrumb.css';
export default function Breadcrumb() {
    const breadCrumb=[
        "Home",
        "Clothing",
        "T-Shirts",
    ]
    return (
        <div className="breadcrumb-container flex-row" >
            {
                breadCrumb.map( (bread,index) => {
                    return (
                        <div className="breadcrumb-item" key={index} >
                            {bread}
                        </div>
                    )
                })
            }
        </div>
    )
}
