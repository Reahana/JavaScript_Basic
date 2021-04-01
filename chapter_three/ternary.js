 var n = 10
 var str = ''

 if (n % 2 == 0) {
     str= 'EVEN'
 } else {
     str = 'ODD'
 }

 console.log(str);

 // Ternary
 // use for only 1 line 
 
 var result = n % 2 == 0 ? 'EVEN' : 'ODD'
 console.log(result);

 // condition ? true side : false side