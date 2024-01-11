var a = parseFloat(prompt("nhap a"));
var b = parseFloat(prompt("nhap b"));
var c = parseFloat(prompt("nhap c"));
var number = [a , b ,c];
var max = Math.max.apply(Math , number);
var min = Math.min.apply(Math , number);
var mid = (a+b+c)-(max+min)
console.log(`day so : ${min} ${mid} ${max}`);

