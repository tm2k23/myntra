import {
    ADD_TO_BAG,
    REMOVE_FROM_BAG,
    EMPTY_BAG,
    SET_QUANTITY,
    SET_SIZE,
} from '../actions/bag';

const defaultBagState = [
    {
        id: "111354",
        brandName: "LEVIS",
        productName: "Regular Fit Linen Solid Shirt",
        price: 2639,
        originalPrice: 3299,
        discountPercent: 20,
        images: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12365690/2021/1/20/73a9a06b-4d24-4cd3-a958-10e4cceea44b1611122727200-Levis-Men-Shirts-3321611122725361-1.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12365690/2021/1/20/6b133902-ff35-47db-93f7-1b1e335c77041611122727181-Levis-Men-Shirts-3321611122725361-2.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12365690/2021/1/20/50184889-c843-4dec-92a3-3ebaa799565e1611122727163-Levis-Men-Shirts-3321611122725361-3.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12365690/2021/1/20/35dbe0e7-0e5a-4f2d-adcf-f8a10db0eee41611122727140-Levis-Men-Shirts-3321611122725361-4.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12365690/2021/1/20/44d48ef1-4b88-4e75-8732-82e28e9087af1611122727119-Levis-Men-Shirts-3321611122725361-5.jpg",
        ],
        postedAt: 1326740656,
        numberOfReviews: 600,
        rating: 4.2,
        color: ["WHITE"],
        gender: "MALE",
        quantity : 5,
        size : 42
    },
    {
        id: "723891",
        brandName: "ROADSTER",
        productName: "Checked Casual Shirt",
        price: 879,
        originalPrice: 1599,
        discountPercent: 45,
        images: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6849350/2019/2/4/637626cc-565d-4322-98ed-2674cfa4a4281549278244906-Roadster-Men-Blue-Regular-Fit-Checked-Casual-Shirt-378154927-1.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6849350/2019/2/4/9d4ff7c7-549f-4b8f-9bea-f254c3c631861549278244885-Roadster-Men-Blue-Regular-Fit-Checked-Casual-Shirt-378154927-2.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6849350/2019/2/4/41772698-8748-466f-a091-6de23005bbad1549278244863-Roadster-Men-Blue-Regular-Fit-Checked-Casual-Shirt-378154927-3.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6849350/2019/2/4/20d86166-4420-43f2-baad-c397fb8712be1549278244843-Roadster-Men-Blue-Regular-Fit-Checked-Casual-Shirt-378154927-4.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6849350/2019/2/4/fc961fe1-19bd-4b43-a64a-4cc761f1f4d81549278244822-Roadster-Men-Blue-Regular-Fit-Checked-Casual-Shirt-378154927-5.jpg",
        ],
        postedAt: 1312257136,
        numberOfReviews: 4690,
        rating: 4.0,
        color: ["BLUE"],
        gender: "MALE",
        quantity : 2, 
        size : 46
    },
    {
        id: "412562",
        brandName: "ROADSTER",
        productName: "Checked Casual Shirt",
        price: 909,
        originalPrice: 1299,
        discountPercent: 30,
        images: [
        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12947450/2021/1/27/3a52d6b9-04c1-4188-9ddb-473484a365081611724552932-Roadster-Men-Shirts-4521611724551117-1.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12947450/2021/1/27/b0494c20-73e7-49d4-8714-ded9e49bc6751611724552909-Roadster-Men-Shirts-4521611724551117-2.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12947450/2021/1/27/0ec30fab-ebb0-48f0-aebc-597ea00822f31611724552887-Roadster-Men-Shirts-4521611724551117-3.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12947450/2021/1/27/1dbef28e-6801-4ced-91d6-4913b7b3fdc81611724552866-Roadster-Men-Shirts-4521611724551117-4.jpg",

        "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12947450/2021/1/27/7d643463-327a-4e4e-9135-1d701a9b2c831611724552844-Roadster-Men-Shirts-4521611724551117-5.jpg",
        ],
        postedAt: 1479014104,
        numberOfReviews: 30,
        rating: 3.9,
        color: ["MUSTARD YELLOW", "BROWN"],
        gender: "MALE",
        quantity : 4, 
        size : 38
    },
];

export default function bag(state = defaultBagState, action) {
    switch (action.type) {
        case ADD_TO_BAG:
            return [
                ...state,
                action.item
            ];
        case REMOVE_FROM_BAG:
            return state.filter(item => item.id !== action.item.id);
        case EMPTY_BAG:
            return [];
        case SET_QUANTITY:
            return state.map(item => {
                if (item.id === action.item.id) {
                    return {
                        ...item,
                        quantity: action.quantity
                    }
                }
                return item;
            });
        case SET_SIZE:
            return state.map(item => {
                if (item.id === action.item.id) {
                    return {
                        ...item,
                        size: action.size
                    }
                }
                return item;
            });
        default:
            return state;
    }
}