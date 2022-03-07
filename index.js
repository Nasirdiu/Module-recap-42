1.// let & const variable declear system

const number='one to handed';//no change variable name
let name='apple';
name='komla';//jodi kono name chane kore hoi tahole let use korte hba.
console.log(name);

// 2.conditions six : >,<,===,!==,<=,>=
//multiple condition: &&,||.
if(name==='apple'){
    alert('done')
}
else{
    alert('error')
}

// 3.array method system
const numbers=[11,55,44,55,44];
numbers[0]=50;//change kora hola.

4//for loop
for(let i=0;i<numbers.length;i++){
    const num=[i];
    console.log(num);
}

//5.function
function multiply(num1,num2){
    const result=num1+num2;
    return result;
}
const total=multiply(20,50);
console.log(total);
// 6. object
const student={
    name:'Nasir',
    age:25,
    movie:['gandu','english'],
    phone:'Iphone 13pro max'
}
//acess system
const myVariable='age'
console.log(student.age);
console.log(student['age']);
console.log(student[myVariable]);