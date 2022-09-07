function myAsyncFunction(name){
    return new Promise(function(resolve, reject){
        if(name == "Sudha"){
            resolve("promise resolved");
        }
        else{
            reject("Promise rejected");
        }
    })
}

myAsyncFunction("Sudha1")
.then(val => console.log(val))
.catch(val =>console.log(val));


