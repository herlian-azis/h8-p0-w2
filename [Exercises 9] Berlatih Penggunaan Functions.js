//Tugas 1
function shoutOut(){
    return "Halo Function!"
}
console.log(shoutOut())


console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//Tugas 2

var num1 = 5;
var num2 = 6;

function calculateMultiply(no1,no2){
    return no1 * no2
}

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
//Tugas 3

function processSentence(nama,umur,alamat,hobi){

    return "Nama saya " + nama + ", umur saya " + umur + " tahun" + ", alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi + "!"
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
 // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"