const student={
    name:'Nasir',
    age:25,
    movie:['gandu','english'],
    phone:'Iphone 13pro max'
}


const studentJson=JSON.stringify(student);
// console.log(student);
// console.log(studentJson);

//parse kore ager jaigai niye jaba 
const studentObj=JSON.parse(studentJson);
// console.log(studentObj);

// 2.featch 
/* fetch(url)
.then(res=>res.json())
.then(data=>console.log(data)); */

//keye value
const keys=Object.keys(student);
// console.log(keys);
const values=Object.values(student);
// console.log(values);
//new product add
const products=[
    {name:'laptop',band:'asus',price:50000,color:'black'},
    {name:'camara',band:'nicon',price:500,color:'blue'},
    {name:'laptop',band:'dell',price:2000,color:'gray'},
    {name:'phone',band:'apple',price:4000,color:'green'},
    {name:'watch',band:'apple',price:8000,color:'red'},
];
const newAdd={name:'vajal',band:'asus',price:50000,color:'black'};
//added new product
const added=[...products,newAdd];
// console.log(added);

// remove phone 
const remove=products.filter(p=>p.name!=='phone');
console.log(remove);