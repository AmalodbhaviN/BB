// 1. Create a Parameterised Function with 3 parameters and Print the parameter values in the console  

function amala(name,age,gender){
    console.log(name,age,gender)
}
amala("nicy",21,"F")
//--------------------------------------------------------------------------------------
// 2.	Create function to return String Values
function nam(n){
    return n
}
var val=nam("amala");
console.log(val)
//---------------------------------------------------------------------------------------
// Create a function to filter the Data based on the following conditions 
//          filter data based on the Apple brand 
//          filter the data and print all the products whose Price is greater than 50000 
//          Print all the those data whose brandName is Apple or Samsung and Price is higher then 70000
// -----------------------------------------------------------------------------------------
// 4.	Create the object with 5 Properties and Perform all the CRUD Operations
var obj={
    nam:"amala",
    roll:4203,
    age:21,
    gender:"female",
    add:'vja'
}
//read
console.log(obj)
//create
obj.sub="maths"
console.log(obj)
//update
obj.nam="nicy"
console.log(obj)
//del
delete obj.age
console.log(obj)
