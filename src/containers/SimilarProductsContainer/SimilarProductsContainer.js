import React from 'react'
import './SimilarProductsContainer.css'
import { ItemCard } from '../../components/index.js';
export default function SimilarProductsContainer() {
    let products=[
        {
            id: "180820",
            brandName: "WROGN",
            productName: "Slim Fit Solid Casual Shirt",
            price: 1259,
            originalPrice: 2099,
            discountPercent: 40,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1758578/2017/5/12/11494569522819-WROGN-Men-Shirts-8521494569522516-1.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1758578/2017/5/12/11494569522794-WROGN-Men-Shirts-8521494569522516-2.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1758578/2017/5/12/11494569522769-WROGN-Men-Shirts-8521494569522516-3.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1758578/2017/5/12/11494569522745-WROGN-Men-Shirts-8521494569522516-4.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/1758578/2017/5/12/11494569522717-WROGN-Men-Shirts-8521494569522516-5.jpg",
            ],
            postedAt: 1264271400,
            numberOfReviews: 360,
            rating: 4.2,
            color: ["GREEN"],
            gender: "MALE",
        },
        {
            id: "108974",
            brandName: "HANCOCK",
            productName: "Regular Fit Floral Shirt",
            price: 1379,
            originalPrice: 2299,
            discountPercent: 40,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13320818/2021/1/8/623cd387-b2b7-45c0-a539-fb50fe44c2751610105263406-Hancock-Men-Shirts-9181610105261837-1.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13320818/2021/1/8/d947f2be-aa02-4c4e-96ac-4e9294dbee931610105263349-Hancock-Men-Shirts-9181610105261837-2.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13320818/2021/1/8/6376f3f8-7540-47dd-9a6e-0477b38e85fd1610105263280-Hancock-Men-Shirts-9181610105261837-3.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13320818/2021/1/8/9113d22d-eb4a-4c2a-8528-c8158dea10371610105263222-Hancock-Men-Shirts-9181610105261837-4.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13320818/2021/1/8/def93238-c580-47f1-b25f-7084502477ad1610105263168-Hancock-Men-Shirts-9181610105261837-5.jpg",
            ],
            postedAt: 1604237061,
            numberOfReviews: 3980,
            rating: 3.8,
            color: ["BLACK", "BLUE"],
            gender: "MALE",
        },
        {
            id: "789042",
            brandName: "HIGHLANDER",
            productName: "Slim Fit Printed Casual Shirt",
            price: 576,
            originalPrice: 1049,
            discountPercent: 45,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11780944/2020/4/3/1ee22980-624d-4822-8a7b-1934c2ade5ba1585905005496HIGHLANDERMenBlackWhiteSlimFitPrintedCasualShirt1.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11780944/2020/4/3/c815eeeb-be3c-450d-84d9-387d77d8642c1585905005561HIGHLANDERMenBlackWhiteSlimFitPrintedCasualShirt2.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11780944/2020/4/3/b716a293-d3e1-452c-889a-ed3aa7463c391585905005634HIGHLANDERMenBlackWhiteSlimFitPrintedCasualShirt3.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11780944/2020/4/3/c8bb60df-3cfd-4193-b0a8-7802c0ce53ae1585905005704HIGHLANDERMenBlackWhiteSlimFitPrintedCasualShirt4.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11780944/2020/4/3/d04f8a69-8cb8-4132-a55e-c03fb1602a921585905005771HIGHLANDERMenBlackWhiteSlimFitPrintedCasualShirt5.jpg",
            ],
            postedAt: 1575221421,
            numberOfReviews: 77,
            rating: 3.5,
            color: ["BLACK", "WHITE"],
            gender: "MALE",
        },
        {
            id: "510983",
            brandName: "MAST & HARBOUR",
            productName: "Slim Fit Solid Casual Shirt",
            price: 854,
            originalPrice: 1899,
            discountPercent: 55,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2389862/2018/4/19/11524137287746-Mast--Harbour-Men-Pink-Regular-Fit-Solid-Casual-Shirt-1991524137287562-1.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2389862/2018/4/19/11524137287732-Mast--Harbour-Men-Pink-Regular-Fit-Solid-Casual-Shirt-1991524137287562-2.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2389862/2018/4/19/11524137287710-Mast--Harbour-Men-Pink-Regular-Fit-Solid-Casual-Shirt-1991524137287562-3.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2389862/2018/4/19/11524137287684-Mast--Harbour-Men-Pink-Regular-Fit-Solid-Casual-Shirt-1991524137287562-4.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2389862/2018/4/19/11524137287663-Mast--Harbour-Men-Pink-Regular-Fit-Solid-Casual-Shirt-1991524137287562-5.jpg",
            ],
            postedAt: 1367346600,
            numberOfReviews: 144,
            rating: 4.2,
            color: ["PINK"],
            gender: "MALE",
        },
        {
            id: "567845",
            brandName: "GINI & JONY",
            productName: "Regular Fir Checked Shirt",
            price: 1049,
            originalPrice: 1399,
            discountPercent: 25,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11083618/2021/2/12/495ec6d7-4e48-4c67-9c2c-d109b67b573e1613121119602-Gini-and-Jony-Girls-Maroon--White-Regular-Fit-Checked-Casual-1.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11083618/2021/2/12/a957105b-debd-4f52-bef9-a15884e42c091613121119583-Gini-and-Jony-Girls-Maroon--White-Regular-Fit-Checked-Casual-2.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11083618/2021/2/12/79d9d478-e230-44b8-8e10-866f151f70a51613121119564-Gini-and-Jony-Girls-Maroon--White-Regular-Fit-Checked-Casual-3.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11083618/2021/2/12/5f0f0139-4007-4d29-9c01-2c211d9595a01613121119543-Gini-and-Jony-Girls-Maroon--White-Regular-Fit-Checked-Casual-4.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11083618/2021/2/12/7e4a1ae9-fa5f-4d89-83ae-d92da3d333f51613121119527-Gini-and-Jony-Girls-Maroon--White-Regular-Fit-Checked-Casual-5.jpg",
            ],
            postedAt: 1300628719,
            numberOfReviews: 50,
            rating: 4.0,
            color: ["MAROON", "WHITE"],
            gender: "GIRLS",
        },
        {
            id: "667788",
            brandName: "PEPE JEANS",
            productName: "Regular Fit Printed Casual Shirt",
            price: 549,
            originalPrice: 999,
            discountPercent: 45,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11271624/2021/1/28/ed23bd79-40c6-467e-b516-316242d7fcde1611833536029PepeJeansGirlsLimeGreenRegularFitPrintedCasualShirt1.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11271624/2021/1/28/fd787204-2eb2-48cb-89cc-75253c861f1b1611833536070PepeJeansGirlsLimeGreenRegularFitPrintedCasualShirt2.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11271624/2021/1/28/557d1507-e314-4228-9179-1a5cf67617981611833536095PepeJeansGirlsLimeGreenRegularFitPrintedCasualShirt3.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11271624/2021/1/28/da7fa80e-0ceb-4eb0-aeea-c15c726c45f91611833536118PepeJeansGirlsLimeGreenRegularFitPrintedCasualShirt4.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11271624/2021/1/28/6a3b439a-d106-46b6-b099-b70dfd6aecf31611833536144PepeJeansGirlsLimeGreenRegularFitPrintedCasualShirt5.jpg",
            ],
            postedAt: 1262334919,
            numberOfReviews: 100,
            rating: 4.5,
            color: ["LIME GREEEN"],
            gender: "GIRLS",
        },
        {
            id: "990077",
            brandName: "GAP",
            productName: "Faded Denim Casual Shirt",
            price: 1839,
            originalPrice: 2299,
            discountPercent: 20,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12810666/2021/2/8/87562077-aebf-4108-970e-937ba6879f771612786593723-GAP-Girls-Blue-Regular-Fit-Faded-Denim-Cotton-Casual-Shirt-1-1.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12810666/2021/2/8/db1b28e0-39ce-4272-ab85-b23639dac6ca1612786593700-GAP-Girls-Blue-Regular-Fit-Faded-Denim-Cotton-Casual-Shirt-1-2.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12810666/2021/2/8/b0a2876e-11e9-4dce-b44e-ca4140ee775c1612786593681-GAP-Girls-Blue-Regular-Fit-Faded-Denim-Cotton-Casual-Shirt-1-3.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12810666/2021/2/8/c04e6bcd-7ced-4249-aa34-6e2c986c21a71612786593662-GAP-Girls-Blue-Regular-Fit-Faded-Denim-Cotton-Casual-Shirt-1-4.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12810666/2021/2/8/3428b3aa-0054-41fa-90d5-90393cfa24ca1612786593643-GAP-Girls-Blue-Regular-Fit-Faded-Denim-Cotton-Casual-Shirt-1-5.jpg",
            ],
            postedAt: 1240356919,
            numberOfReviews: 150,
            rating: 4.9,
            color: ["BLUE"],
            gender: "GIRLS",
        },
        {
            id: "445599",
            brandName: "H & M",
            productName: "FaOversized Cotton Shirt",
            price: 1299,
            originalPrice: 1299,
            discountPercent: 0,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/17/804706d7-bf6d-42de-9eff-0faf4a67f10d1613577678101-1.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/17/4a25e187-c093-47b5-a2ea-6bd336c03f261613577678117-2.jpg",
            ],
            postedAt: 1201791021,
            numberOfReviews: 290,
            rating: 4.0,
            color: ["PURPLE"],
            gender: "GIRLS",
        },
        {
            id: "301095",
            brandName: "PEPE JEANS",
            productName: "Regular Fir Solid Denim Shirt",
            price: 959,
            originalPrice: 1599,
            discountPercent: 40,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11271594/2021/1/28/5131ba41-11e2-4344-bc7b-31258f96af721611833535290PepeJeansGirlsBlueRegularFitSolidCasualDenimShirt1.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11271594/2021/1/28/43134f0d-4b37-4208-8e0b-b56c08392ec31611833535334PepeJeansGirlsBlueRegularFitSolidCasualDenimShirt2.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11271594/2021/1/28/d584e3ae-f16f-410a-8c61-9255a88bdf0a1611833535355PepeJeansGirlsBlueRegularFitSolidCasualDenimShirt3.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11271594/2021/1/28/391ba51a-1d2f-4b2c-bb57-a8d68fe841641611833535377PepeJeansGirlsBlueRegularFitSolidCasualDenimShirt4.jpg",
            ],
            postedAt: 1179365841,
            numberOfReviews: 50,
            rating: 4.1,
            color: ["BLUE"],
            gender: "GIRLS",
        },
        {
            id: "4001",
            brandName: "PANNKH",
            productName: "Navy Blue Printed Top",
            price: 549,
            originalPrice: 999,
            discountPercent: 45,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/df0c1d8c-528d-4afd-9714-a40c19b105ec1531903512284-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-1.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/bd70e27a-21e3-4abc-bda7-f780296e493e1531903512255-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-2.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/c0e43db5-8df9-492d-85dd-9775adcb9ac81531903512216-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-3.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/9643a585-6d2c-4379-88d8-57777e0cf0321531903512192-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-4.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2506738/2018/7/18/49e1417a-8696-471a-b1e3-0ccbb47b917a1531903512159-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-5.jpg",
            ],
            postedAt: 1483209000,
            numberOfReviews: 102,
            rating: 4.2,
            color: ["NAVY BLUE"],
            gender: "FEMALE",
        }
    ];
    return (
        <div className="similar-products-container flex-row " >
            <div className="close-similar-product" >
                <i class="fas fa-arrow-left"></i>
            </div>
            {
                products.map((product,index) =>{
                    return <ItemCard item={product} index={index} />
                })
            }
        </div>
    )
}
