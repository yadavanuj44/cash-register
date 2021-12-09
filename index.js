const billAmount = document.querySelector("#bill-amount");
const amountGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#btn-check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillandCashAmount() {
    message.style.display = "none";
    var billIntAmount = parseInt(billAmount.value);
    var amountIntGiven = parseInt(amountGiven.value);
    if (isNaN(billAmount.value)) {
        showMessage("Enter a number for bill amount");
    } else {
        if (billIntAmount > 0) {
            if (isNaN(amountGiven.value)) {
                showMessage("Enter a number for paid amount");
            } else {
                if (amountIntGiven >= billIntAmount) {
                    const amountToBeGiven = amountIntGiven - billIntAmount;
                    calculateChangeToBeGiven(amountToBeGiven);
                } else {
                    showMessage("Do you want to wash plates 🍽️ to pay the money?");
                }
            }

        } else {
            showMessage("The bill amount should be greater than 0");
        }
    }
});

function calculateChangeToBeGiven(amount) {
    for (var i = 0; i < notesAvailable.length; i++) {
        const numberOfNotes = Math.trunc(amount / notesAvailable[i]);
        amount = amount % notesAvailable[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}