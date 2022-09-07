const addTwoNum  = function(num1, num2){
    return num1 + num2;
}

//using arrow functions
const addTwoNum1  = (num1, num2) => num1 + num2;

const sqr = num => num * num;

const noparam = () => "hello World";

console.log(sqr(2));
console.log((() => "hello World")());



const person = {
    name:"ABC",
    test(){
        console.log("Name is " + this.name);

        setTimeout(function(){
            console.log(this.name);
        })
        }
}

//person.test();


const person1 = {
    name:"ABC",
    test(){
        console.log(this.name);
        setTimeout(() => console.log(this.name)
        )
    }
}
person1.test();