
// pecentage of total number

function result(a,b) {
 var percent=a/b*100;
 return percent;   
}
var c= result(40,150);
console.log(c);

// even or odd number

function evrod(num) {
   return num%2 ===0?'even':'odd' ;
}
var a=evrod(7);
console.log(a);

// reverse string

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
 var a =reverseString('Javascript');
console.log(a);