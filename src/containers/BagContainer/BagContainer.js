import React from 'react';
import './BagContainer.css';
import {BagItemCard} from '../../components/index'
export default function BagContainer({item}) {
    let products = [
        {
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
        },
        {
            id: "82019",
            brandName: "LEVIS",
            productName: "Slim Fit Checked Shirt",
            price: 1599,
            originalPrice: 1999,
            discountPercent: 20,
            images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13170746/2021/1/5/52848358-0cbd-44e4-9749-88e9fc8c5ea71609828325310-Levis-Men-Shirts-8831609828323812-1.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13170746/2021/1/5/a4505bb0-612c-4ba7-a389-ba7a1e282e041609828325264-Levis-Men-Shirts-8831609828323812-2.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13170746/2021/1/5/352b4729-7031-4bad-be46-7ef8222e61a41609828325210-Levis-Men-Shirts-8831609828323812-3.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13170746/2021/1/5/0085af9d-20b0-48a2-8036-74f43c0fe8871609828325161-Levis-Men-Shirts-8831609828323812-4.jpg",
    
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/13170746/2021/1/5/4f115860-c914-4402-8015-5f7eb9ca49fa1609828325115-Levis-Men-Shirts-8831609828323812-5.jpg",
            ],
            postedAt: 1584888316,
            numberOfReviews: 2550,
            rating: 4.5,
            color: ["GREEN", "BLUE"],
            gender: "MALE",
        },
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
        },
    ]
    function checkOutHandler(event){
        console.log("Proceed to checkout, here is what will happen");
        console.log("1. We need to close the modal as well");
        console.log("2. We need to make the bag empty");
    }
    return (
        <div className="bag-container flex-row " >
            {
                products.map((product,index) =>{
                    return (
                        <BagItemCard item={product} />
                    )
                })
            }
            <div className="bag-action" >
                <div className="total-amount center" >
                    <p>₹ 56009</p>
                </div>
                <div className="checkout center" >
                    <p
                        onClick={ checkOutHandler }
                    >Checkout <i class="fas fa-arrow-circle-right"></i></p>
                </div>
            </div>
        </div>
    )
}
