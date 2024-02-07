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




// Değiştirilecek sayıyı bir değişkende tutuyoruz
let number1 = 30;
const sayiElementi = document.getElementById("pointOne");

// Butona tıklama olayını dinleyerek sayıyı arttırıyoruz
document.getElementById("arttirButton").addEventListener("click", function() {
    number1++; // Sayıyı 1 arttır
  sayiElementi.textContent =  number1; // Arttırılmış sayıyı göster
});







// Değiştirilecek sayıyı bir değişkende tutuyoruz
let number2 = 15;
const sayiGosterElementi = document.getElementById("pointTwo");

// Butona tıklama olayını dinleyerek sayıyı arttırıyoruz
document.getElementById("plusButton").addEventListener("click", function() {
    number2++; // Sayıyı 1 arttır
  sayiGosterElementi.textContent =  number2; // Arttırılmış sayıyı göster
});






function sayiYaz() {
    // Kullanıcıdan girilen sayıyı al
    var sayi = document.getElementById("numberInput").value;
    
    // Girilen sayıyı konsola yazdır
    console.log("Girilen sayı: " + sayi);
    
    // İsterseniz başka bir işlem yapabilirsiniz
    // Örneğin, bu sayıyı bir değişkene atayabilirsiniz
    // var sayiDegiskeni = parseInt(sayi);
}