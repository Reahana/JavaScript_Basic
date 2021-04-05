// &&   ||  !
// AND  OR  NOT

/* Logical Operators only used when we have two or more 
conditions and result comes from both of their participation */

// A && B 
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// A || B
// true && true = true
// true && false = true
// false && true = true
// false && false = false


var a = 10
var b = 20 
var c = 30 
var d = 40

//AND
if (a > b && c > d) {
    console.log('ok ');
} else {
    console.log('condition false');
}

//OR
if (a < b || c > d) {
    console.log('ok ');
} else {
    console.log('condition false');
}


// NOT

var check = !(a>b)  // real false !! = real
 console.log(check);