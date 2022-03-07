
const mony=50;
const monyVar=100;
let food;
if(mony>100){
    food='biranny';
}else{
    food='egg'
}
//ternary
let food1=mony>100?'biranny' :'chaKhabo';
console.log(food1);

let food2=(mony>100 && monyVar>100)?'biranny' :'chaKhabo';
console.log(food2);

//number to string convertion
const num=52;
console.log(num);
const num1=num+'';
console.log(num1);

//string to number
const num3='100';
const input=+num3;
// console.log(input);

const isActive=true;
const show=()=>console.log('display User');
const hide=()=>console.log('Hide user');

isActive&&show();

isActive || hide();

console.log(isActive);
//toggle bolean aber ager jaigai niye jower jono 
isActive =!isActive;