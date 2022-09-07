//function statement

function statement(item){
    console.log("Function statement " + item);
}

//function expression
var expression = function(item){
    console.log("Function expression " + item);
}

expression("item");

var iife = function(item){
    return "Immediately invoked function expression " + item;
}("item");

console.log(iife);

(function(item){
    console.log("Immediately invoked function expression " + item);
}
)('IIFE');


//IIFE with closure
(function(){
    var counter = 0;

    function add(){
        return ++counter;
    }
    console.log(add());
})();

(function(){
    var foo = "bar";
    console.log(foo);
})();

//with arrow function
(() => {
    var foo = "bar";
    console.log(foo);
})();

//console.log(foo);

