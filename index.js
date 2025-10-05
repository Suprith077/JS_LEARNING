console.log("Hello, World!")
let name='suprith';
console.log(name);
let goalsScored=500;
goalsScored=600;
console.log(goalsScored);
const pi=3.14;

console.log(pi);

var city='Bangalore';
console.log(city);
city='Mumbai';
console.log(city);
city =1;
console.log(city);

let person={
    name:'Suprith',
    age:22
}
console.log(person);
person.name = 'sup';
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);
let selection = 'name';
console.log(person[selection]);

let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr)
function greet(name){
    console.log("Hello" + name); ;
}
greet('sup');
function square(num){
    return num*num;
}
console.log(square(5));
let result = square(6);
console.log(result);