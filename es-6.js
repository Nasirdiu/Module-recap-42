// 1.daynamic vabe korte gale 
const student={
    name:'Nasir',
    age:25,
    movie:['gandu','english'],
    phone:'Iphone 13pro max'
}
//temolate string
const about=`daynamic vabe korle${student.age} arry ta korle${student.movie[0]}`

//2.arrow function

const num =()=>55;
const num1=num=>num+50;
const event=x=>x%2 ==0;
const num3=(x,c,z)=>x+c+z;
const donate=(num,num2)=>{
    const total=num+num2;
    return total;
}

//3.spread operator

const numbers=[11,55,44,55,44];


const newNumber=numbers;
const current=[...numbers,500,20];
newNumber.push(100);
newNumber.push(100);
newNumber.push(100);
console.log(numbers);
console.log(current);