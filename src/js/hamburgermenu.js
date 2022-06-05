/*
 * @Author: Emma Forslund - emfo2102 
 * @Date: 2022-06-02 00:47:50 
 * @Last Modified by: Emma Forslund - emfo2102
 * @Last Modified time: 2022-06-04 18:02:01
 */

function hamburgerMenu(){
  //Funktion för hamburger-menyn
  hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
  })
}