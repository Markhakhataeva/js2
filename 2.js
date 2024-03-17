//1 

let a =5;
let b = 3;
let c=a+b;
console.log(c)

//2

let d=a*b;
console.log(d)


//3


let f=3;

let g=(f<0)
let r=(f>0)
console.log(r)


//4


let h=a-b;
let j=a%b;
b--
a++;

console.log(b)

//5



let x=true;
let y=false;
let n=x<y;
let nn=x>y;
let nnn=x==y;
let nnnn=x!=y;
console.log(n)

//6


 let age=16;

 if(age<18){
    console.log("Вы несовершеннолетний")
 }else{
    console.log("Вы совершеннолетний")
 }



 //7

 function squareArray (numbers){
    const result =[];

    for(let i = 0; i < numbers.length; i++){
        result.push(numbers[i]**2);

    }
    return result;
 }
 const squares=squareArray([3,5])


 console.log(squares)


 //8


let counter=0;
counter+=5

console.log(counter)


//9


let text="hi hi";
let text2="hello";

let mm=text==text2;
let mb=text!=text2;
console.log(mb)



//10

const arr = [2,3,4,5];

for( let i=0;i< arr.length;i++)[
    console.log(arr[i])
]



//11


let agee=18;
let isAdult=(age<=18)
console.log(isAdult)


//1js

let Age=prompt("Ваш возраст?")

if(Age<18){
    console.log("ВЫ не можете пройти тестирование"
    )
}else{
    console.log("ВЫ можете пройти тестирование")
}




//2js


let vv=prompt("")

if(vv=prompt("")){
    console.log("строка не пуста")
}else{
    console.log("строка пуста")
}


//функция



function sum (a,b){
    return a + b
}

const result = sum( 10,10)
console.log(result)

//функция2


function printnumber (n){
    for(let i=1; i <= n; i++){
        console.log(i)
    }
}
printnumber(5)


//функция3

function raz (a,b){
    return console.log (a - b)
}

 raz( 10,10)



 function pr(a,b){
    return console.log (a * b)
}

 pr( 10,10)

 function ch (a,b){
    return console.log (a / b)
}

ch( 10,10)



//функция4



function printmassiv(mas){
    const result=[]
    for( let i=2;i<mas.length ;i++){
       result.push(mas[i])
    }
    return result;
}
const gbgb = printmassiv([2,5,8,9])
console.log(gbgb)