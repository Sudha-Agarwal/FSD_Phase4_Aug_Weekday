function addNumbers(num1,num2,...rest){
    console.log(rest);
    return num1 + num2;

    
}

console.log(addNumbers(2,3,4,5,6));

//default

function sum(num1,num2 = 0){
    return num1 + num2
}

console.log(sum(1));