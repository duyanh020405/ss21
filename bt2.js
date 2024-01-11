
const number = parseInt(prompt("nhap so tuoi cua ban "));
if(isNaN(number)){
    confirm("khong hop le");
}
else if(number %2 == 0){

    confirm("so chan")
}
else{
    confirm("so le")
}