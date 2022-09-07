let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("promise resolved")
    }, 2000);
})


async function f(){
    let result = await promise;
    console.log(result);
}

f();