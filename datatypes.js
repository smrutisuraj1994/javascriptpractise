/* There are two types of datatypes in javascript

1.primitive           2.Non-primitive

There are 7 types of primitive datatype i.e String,Number,Boolean,BigInt,Undefined,Null,Symbol
There are 2 types of non-primitive datatype i.e Object,Array

*/


//********************************** Primitive Datatype ********************************

let num = 10;
console.log(typeof(num)); //Number

let sname = "smruti";
console.log(typeof(sname)); //string

let x=true;
console.log(typeof(x)); //boolen

let num1=124538663n;
console.log(typeof(num1)); //bigint

let y;
console.log(typeof(y)); //undefined

let z=null;
console.log(typeof(z)); //object


// ********************************** Non-primitive Datatype *****************************

let anything={
    name:'smruti',
    age:30
}
console.log(typeof(anything));