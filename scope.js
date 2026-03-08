            //Global Scope..
            
let boss = "I am the global boss"; 

function showBoss() {
    console.log(boss); // ফাংশনের ভেতর থেকেও কাজ করবে
}
showBoss(); 
console.log(boss); // ফাংশনের বাইরেও কাজ করবে

            //Function Scope..

function secretRoom() {
    var secret = "Only inside function!";
    console.log(secret); // এটা কাজ করবে
}

secretRoom();
// console.log(secret); // Error দেবে, কারণ secret বাইরে নেই

            //block scope..

if (true) {
    let blockVariable = "I am trapped in this block";
    var notTrapped = "I can escape (var is weird)";
    
    console.log(blockVariable); // কাজ করবে
}

console.log(notTrapped); // কাজ করবে (var এর কারণে)
// console.log(blockVariable); // Error দেবে (let ব্লক স্কোপড)

            //Lexical scope..

function outer() {
    let outerVar = "I'm from outer space!";

    function inner() {
        console.log(outerVar); // বাইরের ভেরিয়েবল ভেতরে পাওয়া যাবে
    }

    inner();
}
outer();



// let bonus = 30;

// function sum(first,second){
//     let result = first + second + bonus;
//     // console.log(bonus);😂
//     if(result > 9){
//         let mood = 'Happy';
//         console.log(mood);
//     }
    

//     return result;
// }
// const output = sum(5,5);
// console.log(output);
// console.log(bonus);
