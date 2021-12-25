import React from 'react'
import {ProductListContainer,FilterContainer} from '../containers/index.js';
export default function Home() {
    return (
        <div>
            <FilterContainer/>
            <ProductListContainer/>
        </div>
    )
}
