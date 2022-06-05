/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2022-06-02 00:47:57 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2022-06-05 11:42:25
 */


"use strict";
//url:en till webbtjänsten drinkapi och foodapi sparad i en variabler
let urlDrink = "https://studenter.miun.se/~emfo2102/writeable/projekt_webservice/drinkapi.php";
let urlFood = "https://studenter.miun.se/~emfo2102/writeable/projekt_webservice/foodapi.php";

//Hämtar dryck och mat när sidan initieras
window.onload = init;
function init() {
    getDrinks();
    getFood();
    hamburgerMenu();
}


//Läser in maträtterna från webbtjänsten foodapi
function getFood() {
    fetch(urlFood)
        .then(response => {
            if (response.status != 200) {
                return
            }

            return response.json()
                .then(data => showFood(data)) //Anropar showFood som visar maträtterna
                .catch(err => console.log(err))
        })
}


//Skriver ut maträtterna. Funktionen anropas i getFood
function showFood(foodId) {
    //Divarna där maten ska skrivas ut 
    const starterOutput = document.getElementById("starter");
    const pastaOutput = document.getElementById("pasta");
    const grillOutput = document.getElementById("grill");
    const dessertOutput = document.getElementById("dessert");
    const pizzaOutput = document.getElementById("pizza");
    if (starterOutput || pastaOutput || grillOutput || dessertOutput || pizzaOutput) {
        starterOutput.innerHTML = "";
        pastaOutput.innerHTML = "";
        grillOutput.innerHTML = "";
        dessertOutput.innerHTML = "";
        pizzaOutput.innerHTML = "";


        //Utskrift av mat. Skrivs ut beroende på kategori och typ
        foodId.forEach(food => {
            if (food.food_category_id == "1") {
                starterOutput.innerHTML += `<p class="bold-p"> ${food.food_name.toUpperCase()} ${food.food_price}:-  </p> <p> ${food.food_description}</p>`;
            }
            if (food.food_category_id == "2" && food.food_type_id == "1") {
                grillOutput.innerHTML += `<p class="bold-p"> ${food.food_name.toUpperCase()}  ${food.food_price}:-   </p> <p class="description-p"> ${food.food_description}</p>`;
            }

            if (food.food_category_id == "2" && food.food_type_id == "2") {
                pastaOutput.innerHTML += `<p class="bold-p"> ${food.food_name.toUpperCase()} ${food.food_price}:- </p> <p class="description-p"> ${food.food_description} </p>`;
            }

            if (food.food_category_id == "2" && food.food_type_id == "3") {
                pizzaOutput.innerHTML += `<p class="bold-p"> ${food.food_name.toUpperCase()} ${food.food_price}:- </p> <p class="description-p"> ${food.food_description} </p>`;
            }

            if (food.food_category_id == "3") {
                dessertOutput.innerHTML += `<p class="bold-p"> ${food.food_name.toUpperCase()} ${food.food_price}:-  </p> <p class="description-p"> ${food.food_description}</p>`;
            }
        })
    }

}

//Hämtar alla drycker med ett fetch-anrop till drinkapi.php
function getDrinks() {
    fetch(urlDrink)
        .then(response => {
            if (response.status != 200) {
                return
            }

            return response.json()
                .then(data => showDrink(data)) //Visar dryckerna
                .catch(err => console.log(err))
        })
}

//Funktion för att visa drycken
function showDrink(drinkId) {
    //Variabler för utskrift till olika divar
    const whiteOutput = document.getElementById("whitewine");
    const redOutput = document.getElementById("redwine");
    const beerOutput = document.getElementById("beer");
    const nonAlcoOutput = document.getElementById("nonalcohol");
    if (whiteOutput || redOutput || beerOutput || nonAlcoOutput) {
        whiteOutput.innerHTML = "";
        redOutput.innerHTML = "";
        beerOutput.innerHTML = "";
        nonAlcoOutput.innerHTML = "";

        //Utskrift av drycker beroende på vilken typ och kategori
        drinkId.forEach(drink => {
            if (drink.drink_category_id == "1") {
                whiteOutput.innerHTML += `<p class="bold-p"> ${drink.drink_name}  ${drink.drink_price}:- </p> <p class="description-p"> ${drink.drink_description}</p>`;
            }
            if (drink.drink_category_id == "2") {
                redOutput.innerHTML += `<p class="bold-p"> ${drink.drink_name}  ${drink.drink_price}:- </p> <p class="description-p"> ${drink.drink_description}</p>`;
            }
            if (drink.drink_category_id == "3") {
                beerOutput.innerHTML += `<p class="bold-p"> ${drink.drink_name}  ${drink.drink_price}:- </p> <p class="description-p"> ${drink.drink_description}</p>`;
            }
            if (drink.drink_category_id == "4") {
                nonAlcoOutput.innerHTML += `<p class="bold-p"> ${drink.drink_name}  ${drink.drink_price}:- </p> <p class="description-p"> ${drink.drink_description}</p>`;
            }
        })
    }

}



