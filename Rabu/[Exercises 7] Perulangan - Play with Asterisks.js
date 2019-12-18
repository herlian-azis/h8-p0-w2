//1. Menyusun Barisan Bintang
var rows1 = 5
for(z = 0 ; z < rows1; z++){
    console.log("*")
}

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5
var tampung = ""
for(x = 0 ; x < rows2; x++){
    for (y=0 ; y < rows2; y++){
        tampung += "*"
    }
    console.log(tampung)  
    tampung=""
}

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5
var tampung = ""
for(o = 0 ; o < rows3; o++){
    for (p= o + 1 ; p > 0 ; p--){
        tampung += "*"
    }
    console.log(tampung)  
    tampung=""
}

