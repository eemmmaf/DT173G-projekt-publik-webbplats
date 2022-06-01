/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2022-06-02 00:47:44 
 * @Last Modified by:   Emma Forslund - emfo2102 
 * @Last Modified time: 2022-06-02 00:47:44 
 */


//URL till api:et
let bookingUrl = "http://localhost/projekt_webservice/bookingapi.php";

//variabler för bokningens inputfält
const fnameInput = document.getElementById("fname");
const enameInput = document.getElementById("ename");
const timeInput = document.getElementById("time");
const dateInput = document.getElementById("date");
const quantityInput = document.getElementById("quantity");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("textmessage");

//Dagens datum
let today = new Date().toISOString().slice(0, 10)

//variabel för meddelande
let msgOutput = document.getElementById("msg-output")

//Skicka bokning-knapp
const submitBtn = document.getElementById("submit-btn");

//Lägger till eventlistener på submit-knappen
submitBtn.addEventListener("click", addBooking);
submitBtn.addEventListener("click", validateFname);
submitBtn.addEventListener("click", validateEname);
submitBtn.addEventListener("click", validateEmail);
submitBtn.addEventListener("click", validateDate);
submitBtn.addEventListener("click", validateTime);
submitBtn.addEventListener("click", validateQuantity);
//Lägger till eventlistener på inputfält
fnameInput.addEventListener("keyup", validateFname, false)
enameInput.addEventListener("keyup", validateEname, false)
emailInput.addEventListener("keyup", validateEmail, false)
dateInput.addEventListener("change", validateDate, false);
timeInput.addEventListener("change", validateTime, false);
quantityInput.addEventListener("change", validateQuantity, false);



function validateFname() {
    let inputFname = fnameInput.value;
    let errorFname = document.getElementById("error-fname");
    let fnameI = document.getElementById("i-fname");

    if (inputFname.length == "") {
        if (errorFname.innerHTML = "") {
            errorFname.innerHTML += "<span> Fyll i förnamn </span>";
        } else {
            errorFname.innerHTML += "<span> Fyll i förnamn </span>";
        }
        fnameInput.style.border = "2px solid red";
        fnameI.style.display = "none";
        return true;
    } else {
        errorFname.innerHTML = "";
        fnameInput.style.border = "2px solid green";
        fnameI.style.color = "green";
    }
}

function validateEname() {
    let inputEname = enameInput.value;
    let errorEname = document.getElementById("error-ename");
    let enameI = document.getElementById("i-ename");

    if (inputEname.length == "") {
        if (errorEname.innerHTML = "") {
            errorEname.innerHTML += "<span> Fyll i efternamn </span>";
        } else {
            errorEname.innerHTML += "<span> Fyll i efternamn </span>";
        }
        enameInput.style.border = "2px solid red";
        enameI.style.display = "none";
        return true;
    } else {
        errorEname.innerHTML = "";
        enameInput.style.border = "2px solid green";
        enameI.style.color = "green";
    }
}

function validateEmail() {
    let inputEmail = emailInput.value;
    let errorEmail = document.getElementById("error-email");
    let emailI = document.getElementById("i-email");

    if (inputEmail.length == "") {
        if (errorEmail.innerHTML = "") {
            errorEmail.innerHTML += "<span> Fyll i din mailadress </span>";
        } else {
            errorEmail.innerHTML += "<span> Fyll i din mailadress </span>";
        }
        emailInput.style.border = "2px solid red";
        emailI.style.display = "none";
        return true;
    } else {
        errorEmail.innerHTML = "";
        emailInput.style.border = "2px solid green";
        emailI.style.color = "green";
    }
}

function validateDate() {
    let dateI = document.getElementById("i-date");
    if (!dateInput.value) {
        document.getElementById("error-date").innerHTML += "<span> Fyll i datum för bokning. </span>";
        dateInput.style.border = "2px solid red";
        dateI.style.display = "none"
        return true;
    }
    else if (dateInput.value < today) {
        document.getElementById("error-date").innerHTML += "<span> Det valda datumet måste vara i framtiden. </span>";
        dateInput.style.border = "2px solid red";
        dateI.style.display = "none"
        return true;
    } else {
        document.getElementById("error-date").innerHTML = "";
        dateInput.style.border = "2px solid green";
        dateI.style.color = "green";
    }
}

function validateTime() {
    let timeI = document.getElementById("i-time");
    if (!timeInput.value) {
        document.getElementById("error-time").innerHTML += "<span> Fyll i tid för bokning</span>";
        timeInput.style.border = "2px solid red";
        timeI.style.display = "none";
        return true;
    } else {
        document.getElementById("error-time").innerHTML = "";
        timeInput.style.border = "2px solid green";
        timeI.style.color = "green";
    }
}

function validateQuantity() {
    let inputQuantity = quantityInput.value;
    let quantityI = document.getElementById("i-quantity");
    if (inputQuantity == "") {
        document.getElementById("error-quantity").innerHTML += "<span> Välj antal gäster </span>";
        quantityInput.style.border = "2px solid red";
        quantityI.style.display = "none";
        return true;
    } else {
        document.getElementById("error-quantity").innerHTML = "";
        quantityInput.style.border = "2px solid green";
        quantityI.style.color = "green";
    }

}



//Funktion för att lägga till en bokning
function addBooking(event) {
    event.preventDefault()


    //Sparar inmatad data i variabler
    let fname = fnameInput.value;
    let ename = enameInput.value;
    let time = timeInput.value;
    let date = dateInput.value;
    let quantity = quantityInput.value;
    let email = emailInput.value;
    let message = messageInput.value;

    let jsonStr = JSON.stringify({
        booking_date: date,
        booking_time: time,
        guest_fname: fname,
        guest_ename: ename,
        guest_email: email,
        guest_text: message,
        quantity: quantity
    });

    fetch(bookingUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: jsonStr
    })
        .then(response => response.json())
        .then(data => showMessage(data))
        .then(data => clearFields())
        .then(data => removeColor())
        .catch(err => console.log(err))
}

//Rensa formuläret när det är skickat
function clearFields() {

    fnameInput.value = "";
    enameInput.value = "";
    timeInput.value = "";
    dateInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    quantityInput.value = "";

}

/*Funktion för att visa meddelande. Om meddelandet "Tack för din bokning" redan finns visas den inte två gånger
Användaren blir istället "uppscrollad" till längst upp på sidan, ifall en kund vill göra flera bokningar*/
function showMessage(data) {
    if (msgOutput.innerHTML == "<p>Tack för din bokning!</p>") {
        window.scrollTo(0, 0);
    } else {
        msgOutput.innerHTML += `<p>${data["message"]}</p>`;
        window.scrollTo(0, 0);
    }
}

//Funktion för att ändra färg runt inputfälten och symbolerna
function removeColor() {
    let inputFields = document.getElementsByTagName("input");
    let icons = document.getElementsByClassName("fa-solid fa-circle-check");
    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].style.border = "green") {
            inputFields[i].style.border = "1px solid black";
        }
    }
    for (let y = 0; y < icons.length; y++) {
        if (icons[y].style.color = "green") {
            icons[y].style.color = "white";
        }
    }
}
