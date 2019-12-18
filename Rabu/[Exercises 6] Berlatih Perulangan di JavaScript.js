
//1. Melakukan Looping Menggunakan While

var count= 2
console.log("LOOPING PERTAMA")
while(count < 21){
    console.log(count + " - I love coding" ); count += 2
}
var count= 20
console.log("LOOPING KEDUA")
while(count > 0){
    console.log(count + " - I will become fullstack developer" ); count -= 2
}

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

//2. Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA")
for (var i = 1; i < 21; i++) {
    console.log(i + " - I love coding");
  }

console.log("LOOPING KEDUA")
for (var j = 20 ; j > 0; j--) {
    console.log(j + " - I will become fullstack developer");
  }

  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//3. Angka Ganjil dan Genap

for (var j = 1 ; j < 101; j++) {
    if (j%2==0){
        console.log( [j],"genap");
    }else{
        console.log( [j],'ganjil')
    }
  }

for (var a = 1 ; a < 101; a += 2) {
    if (a % 3 == 0){
        console.log("3 KELIPATAN 3 " , [a]);
    }else{
        console.log("")
    }
  }
for (var b = 1 ; b < 101; b+= 5) {
    if (b % 6 == 0){
        console.log("6 KELIPATAN 6", [b]);
    }else{
        console.log("")
    }
  }
for (var c = 1 ; c < 101; c+= 9) {
    if (c % 10 == 0){
        console.log("10 KELIPATAN 10", [c]);
    }else{
        console.log("")
    }
  }