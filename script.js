// 1) Word vs Keyword

// Word -> Any word that does not mean in js. EX. Chacha, Boy, son, Daughter, etc

// KeyWord -> Any word that Have meaning in js. EX. var, let, for, etc

// ****

// 2) Var Let Const

// Variabel -> Value that changes  
// Constant -> Value that does not change

var x = "haramzaada";
const dulha = "Lab";
const dulhan = "Laby";

// ****

// 3) Hoisting

// Variable Ko declare krne seh pahele he use kr lena

console.log(a);
var a=10;

// output in js : Undefined
// output in other lang : not defined

// ****

//  4) Types of Js

//  (i) Primitives
//  (ii) Reference = () , {} , []

// primitives
// bracket nhi hai matlb primitive

var aa = 10;
var bb = aa;

console.log(bb); // 10
console.log(bb+2); //12 value of b is changed 
console.log(a); //10 

// reference

var aaa = [1,2,3,4]
var bbb = aaa;

console.log(aaa); //1,2,3,4

console.log(bbb); // 1,2,3,4
bbb.pop();
console.log(bbb); //1,2,3

// bbb ko change krne pr aaa ko effect pada.
console.log(aaa); //1,2,3

// ****

//  5) Conditionals - if , else , else_if

if(2<5){

}
else if(6<12){

}
else if(15<18){

}
else{

}

// ****

//  6) Loops - for While

// Repetation
// 0-10
for(var i=0;i<=10;i++){
    console.log(i);
}

var ab = 15;
while(ab<=20){
    console.log('anna');
    ab++;
}

// ****

// 7) Functions 

// Use : 
// 1) Use when required/need
// 2) Reuse
// 3) Reuse with differnt data 

function sayhi(){
    console.log('Hi Ji');
    console.log('Kaise ho');
}

sayhi();
sayhi();

// ****

// 8) Arrays

// Store multiple values in a variable

var array = [110,2,1,5,6,7,8,4];

console.log(array[0]);

// push pop shift unshift splice

array.push(55);
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

array.unshift(13);
console.log(array);

array.splice(1,5); // 1 is starting index and 5 is number of values removed 
console.log(array);

// ****

// 9) Objects

// ek bande ke details ko hold karna in a pair of key and value

 
var obj = {
    age:18,
    name:'Samee',
    course:'b.tech',
    rollno:45
}

console.log(obj);



