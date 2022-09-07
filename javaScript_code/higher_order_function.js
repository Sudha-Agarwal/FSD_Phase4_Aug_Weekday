// function greet(name){

//     var msg = "Hello";

//     // function sayHi(){
//     //     console.log(msg + name);

//     // }
//     // return sayHi;

//     return function (){
//         console.log(msg + name);
//     }    
// }

// let res = greet("ABC");
// let res1 = greet("DEF");

// res();
// res1();

// //Data privacy with closures


// var x;

// function f1(y){
//     z = 20;
//     let x = 10;    

//     if(y == 20){
//         let x = 20;
//         console.log(x);
//     }

//     console.log(x);
// }


// f1(20);


// function add_counter(){    
//     var counter = 0;
//         return function add(){
//         counter += 1;
//         return counter;
//     }     
// }


// let add = add_counter();
// console.log(add());
// console.log(add());

// add = add_counter();
// console.log(add());
// console.log(add());
// //counter = 1;


// //console.log(add_counter());
// //console.log(add_counter());



// for(var i=1; i<=3; i++){
//     setTimeout(function(){
//         console.log('after ' + i + ' seconds ' + i);
//     },i*1000);
// }

// for(let i=1; i<=3; i++){
//     setTimeout(function(){
//         console.log('after ' + i + ' seconds ' + i);
//     },i*1000);
// }

//data privacy closure
const manageBankAccount = function(initialBalance){

    let accountBalance = initialBalance;

    return {
        getBalance: function(){ return accountBalance},
        deposit: function(amount){return accountBalance += amount},
        withdrwa: function(amount){
            if(amount > accountBalance){
                return "You cannot withdraw that much";
            }
            return accountBalance -= amount;
        }
    };
}

const accountManager = manageBankAccount(0);

console.log(accountManager.getBalance());
console.log(accountManager.deposit(1000));
console.log(accountManager.withdrwa(200));
console.log(accountManager.getBalance());



