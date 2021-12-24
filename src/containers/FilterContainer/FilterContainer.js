import React from 'react';
import './FilterContainer.css';
import { 
    GenderFilter , 
    DiscountFilter , 
    ColorFilter ,
    PriceFilter
} from '../../components/index';
export default function FilterContainer() {
    return (
        <div className="filter-container" >
            <div className="filter-container-title" >FILTERS</div>
            <GenderFilter/>
            <DiscountFilter/>
            <ColorFilter/>
            <PriceFilter/>
        </div>
    )
}
