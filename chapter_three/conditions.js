var a = 10
var b = 20

// a>b true false
// always put such things in condition which gives boolean value in answer

//if statement

if (a > b) {
    console.log( 'a is greater than b' );
}

if (a<b) {
   console.log(' b is greater than a'); 
}

var n = 50

if (n%2==0) {
    console.log('n is even number');
}
if (n%2==1) {
    console.log('n is odd number');
}

//else statement

if (a > b) {
    console.log( 'a is greater than b' );
} else {
   console.log(' b is greater than a'); 
}

var n = 5

if (n % 2 == 0) {
    console.log('n is even number');
} else {
    console.log('n is odd number');
}

//elseif statement

// then possible result is more than two then use else if

a=20
b=20

if (a > b) {
    console.log( 'a is greater than b' );
} else if (a < b) {
   console.log(' b is greater than a'); 
} else {
    console.log('both are same');
}

var n = 0

if (n == 0) {
    console.log('n is zero');
}else if (n % 2 == 0) {
    console.log('n is even number');
} else {
    console.log('n is odd number');
}