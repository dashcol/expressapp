export default class data{
constructor(id,name,desc,image,price){
    this.id=id;
    this.name=name;
    this.desc=desc;
    this.image=image;
    this.price=price;
}
static get(){
    return products;
}
static add(name,desc,price,image){
   let newProduct=new data(
    products.length+101,
    name,
    desc,
    price,
    image
   );
   products.push(newProduct)
}
}

var products=[new data(101,'Apple','A product by Apple','https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg',125000),
    new data(102,'Samsung','A product by Samsung','https://m.media-amazon.com/images/I/617l83eY1rL._SX679_.jpg',150000),
    new data(103,'Blackberry','A product by blackberry','https://img6.gadgetsnow.com/gd/images/products/additional/large/G72584_View_1/mobiles/smartphones/blackberry-key2-64-gb-black-6-gb-ram-.jpg',50000)
]