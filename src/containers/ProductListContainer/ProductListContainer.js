import {React , useState} from 'react'
import { ItemCard , Sort , ActiveFilters } from '../../components/index';
import './ProductListConatiner.css'
import {sorter} from '../../helpers/sort';
export default function ProductListContainer( {products} ) {
    const [sortParameter , setSortParameter] = useState( null );
    if( sortParameter != null ) {
        products = sorter( products , sortParameter );
    }
    return (
        <div className="product-container" >  
            <div className="product-container-header flex-column " >
                <Sort sortParameter={sortParameter} setSortParameter={setSortParameter} />
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
