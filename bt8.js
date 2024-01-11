var cao = parseFloat(prompt("nhap chieu cao"));
var nang = parseFloat(prompt("nhap can nang"));
var bmi = nang/(cao**2);
console.log(bmi);
if (0<bmi&&bmi<18.5){
    console.log('GAY');
}
else if(18.5<=bmi&&bmi<24.9){
    console.log('Binh thuong');
}else if(bmi >=25){
    console.log('Thua can');
}else if(25<=bmi<29.9){
    console.log('tien beo phi');
}else if(30<=bmi&&bmi<34.9){
    console.log('beo phi cap1');
}else if(35<=bmi&&bmi<39.9){
    console.log('beo phi cap2');
}
else if(bmi>=40){
    console.log('beo phi cap3');
}
