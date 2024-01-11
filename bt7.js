var a = parseFloat(prompt("nhap a"));
var b = parseFloat(prompt("nhap b"));
var c = parseFloat(prompt("nhap c"));
var number = [a , b ,c];
var max = Math.max.apply(Math , number);
var min = Math.min.apply(Math , number);
console.log(`gia tri lon nhat : ${max}`);
console.log(`gia tri nho nhat : ${min}`);
