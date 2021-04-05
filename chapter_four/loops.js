/*Loops are Statements which execute some block of code repeatedly 
until The condition becomes False.

*--> For loop ==> for in , for of
**--> While loop
***--> Do While loop */

//Loops & Conditions are two main fundamental concepts of core programming


//in JS we make Block with { }
/////////////////////////////////////////////////////////

// ******** For Loops *********

// for(var i=0 ; i<100; i++){
// console.log( (i+1) + ' Reahana');
// }


/*for (initializer;condition; increment) {

}*/

// initializer ---> form where to start count , with a variable declaration
//condition  ----> when to stop
//increment / decrement ----> for ignore infinity loop   :::> i+=100 (but remember the condition)
// ; ---> to separate , use when more than 1 statement in a singular line

// for (var i = 1; i<=100; i++){
//     if (i % 2 ==1) {
//         console.log(i);
//     }
    
// }

// var sum = 0;
// for (var i = 1; i<= 10; i++){
//     console.log(sum  + ' + ' + i + ' = ' + (sum+i));
//     sum += i
// }
// console.log('result = ' + sum);

// var sum = 0;
// for (var i = 1; i<=10; i++){
//      if (i % 2 ==0) {
//         console.log(sum  + ' + ' + i + ' = ' + (sum+i));
//         sum += i
//    }
    
//  }
//  console.log('result = ' + sum);

////*******************************/////

 // ******** while Loops *********

 

//  var i =0
//  while (i<10) {
//      console.log('Reahana');
//     i++
//  }

var isRunning = true
while (isRunning) {
    var rand = Math.floor(Math.random() * 10 +1 )
    if (rand == 9) {
        console.log('winner')
        isRunning = false
    } else {
        console.log('Got ' + rand )
    }
}