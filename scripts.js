/*
Author:Michelle Sherwin
Date:11/9/25
File Name:styles.css
*/

//Hamburger menu function//

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}