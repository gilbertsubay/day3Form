/*
    - Update page CV
    - tambahkan form diatas CV: 
        - Nama, Tanngal Lahir, Tempat Lahir, Hobby (checkbox)
        - button Ganti Profile (ketika klik Save, Data Di CV berubah sesuai input)
        - Tampilkan Tahun Lahir di CV


*/


// document.getElementById("div1").innerHTML = "Hello World!"

var length = 16                                     // int
var dec = 16.1                                      // float
var name = "Admin"                                  // string
var data = {"name": "Admin", "age": 16}             // object
var status = true                                   // boolean (true/false)
var hobby = ["Memasak", "Bernyanyi", "Membaca"]     // array


// penggunaan data array
console.log(hobby) 
console.log("banyak hobby: " + hobby.length) 
console.log("ini hobby: " + hobby[0])

hobby[1] = "Main Bola"
console.log(hobby)

// penggunaan data object
console.log(data)
console.log("nama data: ", data.name)
console.log("nama data: ", data["name"])

data["age"] = 20
console.log(data)


// ini contoh komentar
// ini contoh komentar 2

/*
    Ini
    contoh
    komentar
    multi
    line
*/

console.log("Nama saya adalah " + name)
console.error("Contoh + = " + length + 8)
console.log("Contoh " + length + " + " + 8 + " = " + (length + 8))
console.log("Contoh " + length + " - " + 8 + " = " + (length - 8))
console.log("Contoh " + length + " / " + 8 + " = " + (length / 8))
console.log("Contoh " + length + " * " + 8 + " = " + (length * 8))
console.log("Contoh  " + length + " ** " + 8 + " = " + (length ** 8))
console.log("Contoh " + length + " % " + 8 + " = " + (length % 8))
console.log(length + 8)

length += 8 // length = length + 8
length -= 8 // length = length - 8
length--    // length-1
length++    // length+1


function saveData(param1, param2){
    console.log("param1: " + param1)
    console.log("param2: " + param2)
    
    var valName = document.getElementById("name").value
    var valAge = document.getElementById("age").value
    var hobbyPertama = document.getElementById("hobbySatu").value
    var hobbyKedua = document.getElementById("hobbyDua").value
    var hobbyKetiga = document.getElementById("hobbyTiga").value

    var valYoB = hitungTahunLahir(valAge)

    document.getElementById("phoneNumberSaya").innerHTML = valName
    document.getElementById("umurGua").innerHTML = valAge
    document.getElementById("yob-Gua").innerHTML = valYoB


 



    function myFunction() {
        var hobby = document.forms[0];
        var txt = "";
        var i;
        for (i = 0; i < hobby.length; i++) {
          if (hobby[i].checked) {
            txt = txt + hobby[i].value + " ";
          }
        }
        document.getElementById("order").innerHTML = txt;
   
      }

      myFunction();

    alert("Data saved!!")


}

function hitungTahunLahir(age) {
    return 2020 - age
}