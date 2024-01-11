var math = parseFloat(prompt("nhap toan"))
var english = parseFloat(prompt("nhap anh"))
var literature = parseFloat(prompt("nhap van"))
var tb = (math + english + literature)/3;
if(0<tb && tb<5){
    console.log('YEU');
}
else if(5<tb && tb<6.4){
    console.log('TB');

}
else if(6.5<tb && tb <8){
    console.log('KHA');

}
else if(8<tb&&tb<=10){
    console.log('GIOI')
;
}