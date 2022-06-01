/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2022-06-02 00:47:57 
 * @Last Modified by:   Emma Forslund - emfo2102 
 * @Last Modified time: 2022-06-02 00:47:57 
 */


"use strict";
//url:en till webbtjänsten drinkapi och foodapi sparad i en variabler
let urlDrink = "http://localhost/projekt_webservice/drinkapi.php";
let urlFood = "http://localhost/projekt_webservice/foodapi.php";


window.onload = init;
function init() {
    //Läser in Mat och dryck när sidan läses in 
    getFood();
    getDrinks();
}

//Läser in maträtterna från webbtjänsten foodapi
function getFood() {
    fetch(urlFood)
        .then(response => {
            if (response.status != 200) {
                return
            }

            return response.json()
                .then(data => showFood(data))
                .catch(err => console.log(err))
        })
}


//Skriver ut maträtterna. Funktionen anropas i getFood
function showFood(foodId) {
    const starterOutput = document.getElementById("starter");
    const mainOutput = document.getElementById("maincourse");
    const pastaOutput = document.getElementById("pasta");
    const grillOutput = document.getElementById("grill");
    const dessertOutput = document.getElementById("dessert");
    const pizzaOutput = document.getElementById("pizza");

    //Utskrift
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

function getDrinks() {
    fetch(urlDrink)
        .then(response => {
            if (response.status != 200) {
                return
            }

            return response.json()
                .then(data => showDrink(data))
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
    whiteOutput.innerHTML = "";
    redOutput.innerHTML = "";
    beerOutput.innerHTML = "";
    nonAlcoOutput.innerHTML = "";

    //Utskrift
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



