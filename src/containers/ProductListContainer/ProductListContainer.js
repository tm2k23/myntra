import {React} from 'react'
import { ItemCard , Sort , ActiveFilters, Empty } from '../../components/index';
import './ProductListConatiner.css'
import {sorter} from '../../helpers/sort';
import { filterer , checkIfNoFilter } from '../../helpers/selectors';
import {searcher} from '../../helpers/search';
import { useSelector } from 'react-redux';
export default function ProductListContainer( {products} ) {
    const {sortParameter , filters , searchQuery } = useSelector(state => {
        return {
            sortParameter : state.sortStore,
            filters : state.filtersStore,
            searchQuery : state.searchStore.query,
        }
    });
    if( searchQuery !== null && searchQuery !== "" ){
        products = searcher(products , searchQuery);
    }
    let isFilterApplied = !checkIfNoFilter(filters);
    if( isFilterApplied ){
        products = filterer( products , filters );
    }
    if( sortParameter != null ) {
        products = sorter( products , sortParameter );
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
