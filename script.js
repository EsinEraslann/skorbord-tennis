function changeName(order) {
    let text;
    let person = prompt("Please enter your name:");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = person;
    }
    if (order == 1) {
        document.getElementById("playerOne").innerHTML = text;
    }
    else {
        document.getElementById("playerTwo").innerHTML = text;
    }

}

/* 
// Sayıya tıklandığında sayıyı artır
document
  .getElementById("button")
  .addEventListener("click", function () {
    number++;
    // Sayıyı göster
    document.getElementById("number").innerHTML = number;
  });
 */
function arttir() {

    let sonuc = document.getElementById("sonuc");
    sonuc.value = Number(sonuc.value) + 1;
}

function azalt() {

    let sonuc = document.getElementById("sonuc");
    sonuc.value = Number(sonuc.value) - 1;
}


function increase() {

    let sayi = document.getElementById("sayi");
    sayi.value = Number(sayi.value) + 1;
}

function descend() {

    let sayi = document.getElementById("sayi");
    sayi.value = Number(sayi.value) - 1;
}















/* 
let text;
let kullaniciGirisi = prompt("lütfen");
console.log("girilen isim:" + kullaniciGirisi);
document.getElementById(playerTwo).innerHTML = text; */