import {React} from 'react'
import { ItemCard , Sort , ActiveFilters } from '../../components/index';
import './ProductListConatiner.css'
import {sorter} from '../../helpers/sort';
import { useSelector } from 'react-redux';
export default function ProductListContainer( {products} ) {
    const sortParameter = useSelector(state => state.sortStore);
    console.log(sortParameter);
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
                products.map((item, index) => {
                    return (
                        <ItemCard key={index} item={item} />
                    )
                })
            }
        </div>
    )
}
