import React from 'react';
import './FilterContainer.css';
import {GenderFilter , DiscountFilter} from '../../components/index';
export default function FilterContainer() {
    return (
        <div className="filter-container" >
            <GenderFilter/>
            <DiscountFilter/>
        </div>
    )
}
