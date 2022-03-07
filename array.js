const products=[
    {name:'laptop',band:'asus',price:50000,color:'black'},
    {name:'camara',band:'nicon',price:500,color:'blue'},
    {name:'laptop',band:'dell',price:2000,color:'gray'},
    {name:'phone',band:'apple',price:4000,color:'green'},
    {name:'watch',band:'apple',price:8000,color:'red'},
];

const bands=products.map(product=>product.band);
// console.log(bands);

products.forEach(product=>console.log(product.color))
// 3. filter condition diea kaj kore 
const field=products.filter(product=>product.price>5000);
const filds=products.filter(p=>p.name.includes('n'));
console.log(filds);
// console.log(field);

// 4.find 
const fild=products.find(p=>p.name.includes('n'));
// console.log(fild);