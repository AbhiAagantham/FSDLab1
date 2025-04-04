// console.log(1)
// console.log(2)
// console.log(3)
// setTimeout(()=>{
//     console.log("Hello World!! ");
// },3000);
// console.log(4)
// console.log(5)


// //callback: sayHello 
// function greet (callback ,name){
//     console.log("Generating Greetings");
//     callback(name)
// }
// function sayHello(name){
//     console.log("Hello "+name);
// }
// greet(sayHello,"karthik");



function Calculator(a,b,callback){
    callback(a,b)
}
function add(a,b){
    console.log(a+b);
}
Calculator(1,2,add)
