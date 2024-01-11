var day = parseInt(prompt("nhap ngay"));
var month = parseInt(prompt("nhap thang"));
var year = parseInt(prompt("nhap nam"));
if (0<day<31 && month <12 && year > 0){
    console.log(`ngay ${day} thang ${month} nam${year} `)
}
else{
    console.log('khong hop le')
}