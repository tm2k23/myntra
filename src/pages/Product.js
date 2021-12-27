import React from 'react'
import {ProductDetailsContainer, ProductSamplesContainer} from '../containers/index';
import {ProductSampleCarousel} from '../components/index';
export default function Product() {
    const product = {
        id: "828019",
        brandName: "LEVIS",
        productName: "Slim Fit Printed Casual Shirt",
        price: 2639,
        originalPrice: 3299,
        discountPercent: 20,
        images: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13358668/2021/2/8/fea23466-ad54-49ec-aaba-bab98fb1a9e61612774385309-Levis-Men-Shirts-9061612774383873-1.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13358668/2021/2/8/85888e1f-bab2-417c-827d-b73dc9c3b3c71612774385291-Levis-Men-Shirts-9061612774383873-2.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13358668/2021/2/8/344b7421-f638-43e9-aa34-15e553342fb01612774385274-Levis-Men-Shirts-9061612774383873-3.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13358668/2021/2/8/fbbf445a-64f2-4bb0-9e39-55a59f9a8c8b1612774385256-Levis-Men-Shirts-9061612774383873-4.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13358668/2021/2/8/1a53a156-e950-44ce-8e11-48df7f6590921612774385239-Levis-Men-Shirts-9061612774383873-5.jpg",
        ],
        postedAt: 1431787516,
        numberOfReviews: 5400,
        rating: 4.1,
        color: ["WHITE", "BLUE"],
        gender: "MALE",
    }
    return (
        <div>
            <ProductSampleCarousel product={product}/>
            <ProductSamplesContainer product={product} />
            <ProductDetailsContainer product={product} />
        </div>
    )
}
