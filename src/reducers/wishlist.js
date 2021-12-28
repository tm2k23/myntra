import{
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST
}   from '../actions/wishlist';

const defaultWishlistState=[
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
    },
    {
        id: "4002",
        brandName: "SASSAFRAS",
        productName: "White Solid High-Neck Top",
        price: 649,
        originalPrice: 999,
        discountPercent: 35,
        images: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12221944/2020/8/14/b9fc8ee9-ec92-4557-ab60-000e3779291e1597404329638-SASSAFRAS-Women-White-Solid-Top-8171597404327851-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12221944/2020/8/17/5d6326be-82ef-4d4e-8c77-55eb7b28f4b01597641820677-SASSAFRAS-Women-White-Solid-Top-9391597641820541-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12221944/2020/8/14/48019537-1cf2-4fd5-ad61-9b9b399b4df71597404329532-SASSAFRAS-Women-White-Solid-Top-8171597404327851-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12221944/2020/8/14/9d5d7879-7a80-4b2b-b6e2-a4268fc3897f1597404329466-SASSAFRAS-Women-White-Solid-Top-8171597404327851-4.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12221944/2020/8/14/bef9b948-8555-40bc-b280-d85b8c06fdc21597404329403-SASSAFRAS-Women-White-Solid-Top-8171597404327851-5.jpg",
        ],
        postedAt: 1496255400,
        numberOfReviews: 519,
        rating: 3.7,
        color: ["WHITE"],
        gender: "FEMALE",
    },
    {
        id: "4003",
        brandName: "KASSUALLY",
        productName: "Black Solid Peplum Top",
        price: 597,
        originalPrice: 1299,
        discountPercent: 54,
        images: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/9/aae6d5da-cee2-4fdf-99cd-b5421d86d68a1591654989641-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/9/1c27dcfe-d135-4609-aa25-2d2df002e78d1591654989704-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/9/89b16512-6d1a-4892-b404-1e85fc4f791e1591654989757-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/9/e7b4d8be-f613-4686-ab49-0cbf6829b64a1591654989809-4.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/9/f939480f-bd06-4b5d-853d-a0aa8a4146931591654989867-5.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/6/9/9385aeda-976d-419a-a35a-6e8c302629f61591654989915-6.jpg",
        ],
        postedAt: 1527791400,
        numberOfReviews: 963,
        rating: 4.3,
        color: ["BLACK"],
        gender: "FEMALE",
    },
    {
        id: "4004",
        brandName: "HARPA",
        productName: "Peach Solid Empire Top",
        price: 584,
        originalPrice: 1299,
        discountPercent: 55,
        images: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/6/49df934c-237e-4681-97f9-21338fae580c1601936086956-1.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/6/42c9b193-4590-467b-8111-8f3aab0d11671601936087025-2.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/6/56faea02-4d6d-45a7-8ca6-8880f0c9c4f11601936087095-3.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/6/e47da943-c2dd-4583-a2b0-cb0730b0437c1601936087164-4.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/6/2b73e5d8-3d93-44b4-8cf7-26a8ff5ac7711601936087221-6.jpg",
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/10/6/db9fa343-dd15-4441-8177-bcc1dbb5b9e51601936087293-7.jpg",
        ],
        postedAt: 1517423400,
        numberOfReviews: 41,
        rating: 3.4,
        color: ["PEACH"],
        gender: "FEMALE",
    },
];

export const wishlist = ( state = defaultWishlistState , action )=>{
    switch(action.type){
        case ADD_TO_WISHLIST:
            return [...state, action.item];
        case REMOVE_FROM_WISHLIST:
            return state.filter(item => item.id !== action.item.id);
        default:
            return state;
    }
}