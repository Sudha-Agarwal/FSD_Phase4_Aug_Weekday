function first(callback){
    setTimeout(function(){
        console.log(1);
        callback();
    },1000)    
}
// function second(){
//     console.log(2);
// }

//first(second);
//or 
// first(function second(){
//     console.log(2);
// });

//or with anonymous functions(functions without name)
first(function(){
    console.log(2);
});

//second();


function serverRequest(api,callback){
    var response
    setTimeout(function(){
         response = "from server api " + api;     
         callback(response);   
    },1000);    
}

// function printResponse(response){
//     console.log(response);
// }

serverRequest("/getdata", function(response){
    console.log(response);
});