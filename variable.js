/* There are 3 types of variable in javascript i.e const,var and let.But var not used anymore due to the scoped problem.Instead of var now a day used let. */





const x = 10; //this value never changed .

//console.log(x);

var y= 20;

//console.log(y); //this value changed everywhere while the user want to change and also this this function scoped.

let z = 30;

//console.log(z); //this value changed where the user want to change and this is block scoped.


/* Difference between let and var */



//var is function scoped and let is block scoped

function test(){
    let num2=30;
    if(true){
        let num2=40;
        console.log(num2);
    }
    console.log(num2);
}

test();


// let num1=20;
//console.log(num1);
// function test1(){
//     let num2=30;
//     if(true){
//         console.log(num2);
//         num2=40;
//     }
//     console.log(num2);
// }

// test1();




