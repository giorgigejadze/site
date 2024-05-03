const product = [
    {
        id: 1,
        image: 'image/aa-1.jpg',
        title: 'Headphones',
        price: '$60',
    },
    {
        id: 2,
        image: 'image/kk-1.jpg',
        title: 'Rode NT1 Microphone',
        price: '$150',
    },
    {
        id: 3,
        image: 'image/ww-1.jpg',
        title: 'Smart Watch',
        price:'$50'
    },
    {
        id: 4,
        image: 'image/qq-1.jpg',
        title: 'HP Laptop Next Generation',
        price: '$1,500',
    },
    {
        id: 5,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: '$500',
    },
    {
        id: 6,
        image: 'image/bb-1.jpg',
        title: 'Metal Dask Lamp',
        price: '$35',
    },
    {
        id: 7,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: '$2,500',
    },
    {
        id: 8,
        image: 'image/dd-2.jpg',
        title: 'Air Pods Pro',
        price: '$50',
    },
    {
        id: 9,
        image: 'image/ss-5.jpg',
        title: 'Samsung Galaxy S24 ultra',
        price: '$3,000',
    },
    {
        id: 10,
        image: 'image/ff-5.jpg',
        title: 'iphone 15 pro max' ,
        price: '$2,000'
    }
]
const categories = [...new Set(product.map((item)=>
    {return item}))]
     let i = 0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image,title, price} = item;
    return(
        `<div class="box">
            <div class="image-box">
                <img src=${image}></img>
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>`
    )
}).join('')
