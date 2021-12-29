import React from 'react';
import './FilterContainer.css';
import { 
    GenderFilter , 
    DiscountFilter , 
    ColorFilter ,
    PriceFilter
} from '../../components/index';
import { useSelector , useDispatch } from 'react-redux';
import { checkIfNoFilter } from '../../helpers/selectors';
import {clearAllFilters} from '../../actions/filters';
export default function FilterContainer() {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filtersStore);
    // console.log(filters);
    let isFilterApplied = !checkIfNoFilter(filters);
    // console.log(isFilterApplied);
    const [isFilterContainerActive , setFilterContainerActive] = React.useState(false);
    return (
        <>
        <div 
            className={`mobile-filter-icon ${!isFilterContainerActive ? '' : 'mobile-hide-filter'}`}
            onClick={() => setFilterContainerActive(true)}
        ><i class="fas fa-sliders-h"></i></div>
        <div 
            className={`mobile-filter-icon ${isFilterContainerActive ? '' : 'mobile-hide-filter'} close-filter-container`}
            onClick={() => setFilterContainerActive(false)}
        ><i class="fas fa-times"></i></div>
        <div 
            className= {`filter-container ${isFilterContainerActive ? '' : 'mobile-hide-filter'}`}
        >
            <div className="filter-container-header flex-row " >
                <span className="filter-container-title" >FILTERS</span>
                <span 
                    className="clear-all-filters" 
                    style={isFilterApplied ? {display: 'block'} : {display: 'none'}}
                    onClick={() => dispatch(clearAllFilters())}
                >
                    CLEAR ALL
                </span>
            </div>
            <GenderFilter activeFilter={filters.gender} />
            <DiscountFilter activeFilter={filters.discount} />
            <ColorFilter activeFilter={filters.color} />
            <PriceFilter activeFilter={filters.price} />
        </div>
        </>
    )
}
