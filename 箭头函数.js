/* 计算a+b */
let a = 10, b = 5;
let sum1 = (x,y) => x+y;
let sum2 = (x,y) => {x+y};
let sum3 = (x,y) => {return x+y};

console.log(`${sum1}----------------${sum1(a,b)}`);   //(x,y) => x+y----------------15
console.log(`${sum2}--------------${sum2(a,b)}`);     //(x,y) => {x+y}--------------undefined
console.log(`${sum3}-------${sum3(a,b)}`);            //(x,y) => {return x+y}-------15

/* 箭头函数无this */
let hasThis = () => console.log(this);                //{}

console.log(`${hasThis}-----${hasThis()}`);           //() => console.log(this)------undefined

/* 箭头函数无argument */
let hasArgument = x => console.log(arguments[0]);               //{}

console.log(`${hasArgument}----------${hasArgument(1)}`);       //x => console.log(arguments[0])----------undefined