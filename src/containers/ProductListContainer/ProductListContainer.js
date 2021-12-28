import {React} from 'react'
import { ItemCard , Sort , ActiveFilters, Empty } from '../../components/index';
import './ProductListConatiner.css'
import {sorter} from '../../helpers/sort';
import { filterer , checkIfNoFilter } from '../../helpers/selectors';
import { useSelector } from 'react-redux';
export default function ProductListContainer( {products} ) {
    const {sortParameter , filters} = useSelector(state => {
        return {
            sortParameter : state.sortStore,
            filters : state.filtersStore
        }
    });
    // console.log(sortParameter);
    if( sortParameter != null ) {
        products = sorter( products , sortParameter );
    }
    let isFilterApplied = !checkIfNoFilter(filters);
    // console.log(isFilterApplied);
    if( isFilterApplied ){
        products = filterer( products , filters );
    }
    return (
        <div className="product-container" >  
            <div className="product-container-header flex-column " >
                <Sort sortParameter={sortParameter}/>
                <ActiveFilters/>
            </div>
            {
                products.length === 0 ?
                <Empty />
                :
                products.map((item, index) => {
                    return (
                        <ItemCard key={index} item={item} />
                    )
                })
            }
        </div>
    )
}
