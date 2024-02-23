function changeName(order) {
    let text;
    let person = prompt("Please enter your name:");
    if (person == null || person == "") {
        text = "Unknown";
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

document.addEventListener("DOMContentLoaded", function() {
    const numberInput = document.getElementById("numberInput");
    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");

    incrementButton.addEventListener("click", function() {
        numberInput.value = parseInt(numberInput.value) + 1;
    });

    decrementButton.addEventListener("click", function() {
        if (parseInt(numberInput.value) > 0) {
            numberInput.value = parseInt(numberInput.value) - 1;
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const numberInputTwo = document.getElementById("numberInputTwo");
    const incrementButtonTwo = document.getElementById("incrementButtonTwo");
    const decrementButtonTwo = document.getElementById("decrementButtonTwo");

    incrementButtonTwo.addEventListener("click", function() {
        numberInputTwo.value = parseInt(numberInputTwo.value) + 1;
    });

    decrementButtonTwo.addEventListener("click", function() {
        if (parseInt(numberInputTwo.value) > 0) {
            numberInputTwo.value = parseInt(numberInputTwo.value) - 1;
        }
    });
});


