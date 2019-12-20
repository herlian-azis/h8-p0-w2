function xo(str) {
    var oIni = 0
    var xIni = 0
for(i = 0 ; i < str.length ; i ++){
    if (str[i] === "x"){
        xIni += 1
    }else if (str[i] === "o"){
         oIni += 1       
            }
}if(oIni === xIni){
    return true
}else
    return false
}
// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true