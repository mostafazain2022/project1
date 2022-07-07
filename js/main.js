

let toggleButton = document.querySelector(".toggle-menu");
let theLinks = document.querySelector(".links");


toggleButton.onclick = function (e) {
    e.stopPropagation();
    this.classList.toggle("menu-active");
    theLinks.classList.toggle("open");
}


theLinks.onclick = function (e) {
    e.stopPropagation();
}


document.addEventListener("click", (e) => {
    if (e.target !== toggleButton && e.target !== theLinks) {
        if (theLinks.classList.contains("open")) {
            toggleButton.classList.toggle("menu-active");
            theLinks.classList.toggle("open");
        }
    }
});





let headerPage = document.querySelector(".header");

let imgsArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

setInterval(() => {

    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    headerPage.style.backgroundImage = 'url("../images/' + imgsArray[randomNumber] + '")';

}, 3000);