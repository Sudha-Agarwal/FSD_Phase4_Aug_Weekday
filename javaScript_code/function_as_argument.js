let obj = {a:10};
function f1(){
    console.log("f1 called");
}
function show(x,callback){
    console.log(x);
    callback();
    //f1()
    console.log(callback);
    //window.alert();
}
show(10,f1);



